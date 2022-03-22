import styles from "./styles/Cap1.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

function Cap2() {
  const SectionRef = useRef(null);
  const SpanInitRef = useRef(null);
  const SpanMiddleRef = useRef(null);
  const SpanEndRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const Section = SectionRef.current;
    const SpanInit = SpanInitRef.current;
    const SpanMiddle = SpanMiddleRef.current;
    const SpanEnd = SpanEndRef.current;

    const fl = gsap.timeline({
      scrollTrigger: {
        trigger: Section,
        scrub: true,
        start: "center center",
        end: "bottom top",
        pin: true,
      },
    });
    fl.from(".p1", {
      opacity: 0,
      x: innerWidth * 1,
    });
    fl.from("#image", {
      duration: 1,
      opacity: 0,
      y: innerHeight * 1,
    });

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
      <section className={`${styles.cap2} content`} ref={SectionRef}>
        <div className={`${styles.title} ${styles.title_cap2}`}>
          <span ref={SpanInitRef}>Capitulo 2</span>
          <span ref={SpanMiddleRef}>:</span>
          {"  "}
          <span ref={SpanEndRef}> El nacimiento de la fotografía </span>
        </div>
        <section className={`${styles.section_1}`}>
          <div className={styles.image} id="image"></div>
          <div className={`${styles.p1} p1`}>
            <h2 style={{ color: "#ffd330" }}>1822</h2>
            <p>
              El inventor francés Joseph N. Niepce obtuvo la primera fotografía
              permanente, pero deberían transcurrir algunos años antes de que
              esa técnica resultara verdaderamente practica.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Cap2;
