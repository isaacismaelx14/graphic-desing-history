import React, { forwardRef, useEffect, useLayoutEffect, useRef } from "react";
import { Circle1, Montain1, Montain2, Montain3 } from "./Assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type IProps = {
  styles: { readonly [key: string]: string };
};

function Header({ styles }: IProps) {
  const HeaderRef = useRef<HTMLDivElement>(null);
  const HeaderTitleRef = useRef<any>(null);

  useEffect(() => {
    const HeaderTitle = HeaderTitleRef.current;
    const Header = HeaderRef.current;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(HeaderTitle, {
      scrollTrigger: {
        scrub: 1,
      },
      y: 500,
      delay: 0.5,
    });

    gsap.to(".montain", {
      scrollTrigger: {
        scrub: 1,
      },
      x: -100,
      opacity: 0,
    });

    gsap.to(".montain2", {
      scrollTrigger: {
        scrub: 1,
      },
      x: -200,
      scale: 1.6,
    });
    gsap.to(".montain3", {
      scrollTrigger: {
        scrub: 1,
      },
      x: -100,
      opacity: 0,
    });
    gsap.to(".circle", {
      scrollTrigger: {
        scrub: 1,
      },
      y: -800,
    });
  }, []);

  return (
    <section className={styles.header} ref={HeaderRef}>
      <Circle1 className={`${styles.circle} circle`} />
      <h2 className={`${styles.header_title} `} ref={HeaderTitleRef}>
        Historia del diseño gráfico
      </h2>
      <div className={styles.m_group}>
        <Montain2 className={`${styles.m_center} montain`} />
        <Montain1 className={`${styles.m_right} montain2`} />
        <Montain3 className={`${styles.m_left} montain3`} />
      </div>
    </section>
  );
}

export default Header;
