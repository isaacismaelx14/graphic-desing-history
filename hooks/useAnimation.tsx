import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useState } from "react";

function useAnimation(aProps?: useAnimationProps): useAnimation {
  useLayoutEffect(() => {
    if (!aProps) return;
    if (aProps.scrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, [aProps]);

  const createTimeLine = (config: gsap.AttrVars): gsap.core.Timeline =>
    gsap.timeline(config);

  const createScrollTriggerTimeLine = (
    props: createSTLProps
  ): gsap.core.Timeline => {
    if (!aProps?.scrollTrigger) throw new Error("scrollConfig is required", {});

    const defaultC = {
      trigger: props.target,
      scrub: 1,
    };

    return gsap.timeline({
      scrollTrigger: {
        ...(defaultC as any),
        ...props.scrollConfig,
      },
      ...props.config,
    });
  };

  const multiFrom = (
    targets: gsap.TweenTarget[],
    vars: gsap.TweenVars
  ): gsap.core.Tween[] => {
    return targets.map((target) => {
      return gsap.from(target, {
        ...vars,
        scrollTrigger: {
          trigger: target,
          ...(vars as any).scrollTrigger,
        },
      });
    });
  };

  return {
    createTimeLine,
    createScrollTriggerTimeLine,
    from: gsap.from,
    to: gsap.to,
    fromTo: gsap.fromTo,
    multiFrom,
  };
}

export default useAnimation;

type createSTLProps = {
  target: gsap.TweenTarget;
  config?: gsap.AttrVars;
  scrollConfig?: {
    start?: string;
    end?: string;
    trigger?: gsap.TweenTarget;
    scrub?: number | boolean;
    pin?: boolean;
  };
};

interface useAnimation {
  createTimeLine: (config: gsap.AttrVars) => gsap.core.Timeline;
  createScrollTriggerTimeLine: (props: createSTLProps) => gsap.core.Timeline;
  from: (target: gsap.TweenTarget, vars: gsap.TweenVars) => gsap.core.Tween;
  to: (target: gsap.TweenTarget, vars: gsap.TweenVars) => gsap.core.Tween;
  fromTo: (
    target: gsap.TweenTarget,
    fromVars: gsap.TweenVars,
    toVars: gsap.TweenVars
  ) => gsap.core.Tween;
  multiFrom(
    targets: gsap.TweenTarget[],
    vars: gsap.TweenVars
  ): gsap.core.Tween[];
}

type useAnimationProps = {
  scrollTrigger?: boolean;
};
