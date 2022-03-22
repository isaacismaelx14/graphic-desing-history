import styles from "./styles/Cap1.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
function Cap1() {
  const SectionRef = useRef(null);
  const SpanInitRef = useRef(null);
  const SpanMiddleRef = useRef(null);
  const SpanEndRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const SpanInit = SpanInitRef.current;
    const SpanMiddle = SpanMiddleRef.current;
    const SpanEnd = SpanEndRef.current;

    gsap.from(SpanInit, {
      scrollTrigger: {
        trigger: SpanInit,
        scrub: true,
        start: "top bottom",
        end: "bottom center",
      },
      x: -500,
    });

    gsap.from(SpanMiddle, {
      scrollTrigger: {
        trigger: SpanMiddle,
        scrub: true,
        start: "top bottom",
        end: "bottom center",
      },
      opacity: 0,
      y: -50,
    });
    gsap.from(SpanEnd, {
      scrollTrigger: {
        trigger: SpanEnd,
        scrub: true,
        start: "top bottom",
        end: "bottom center",
      },
      x: innerWidth * 1,
      opacity: 0,
    });
  }, []);

  return (
    <>
      <section className="content" ref={SectionRef}>
        <div className={styles.title}>
          <span className="span-init" ref={SpanInitRef}>
            Capitulo 1
          </span>
          <span className="span-middle" ref={SpanMiddleRef}>
            :
          </span>{" "}
          <span className="span-end" ref={SpanEndRef}>
            Las publicaciones periódicas
          </span>
        </div>
      </section>
    </>
  );
}

export default Cap1;
