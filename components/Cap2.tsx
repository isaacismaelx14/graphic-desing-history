import { useLayoutEffect, useRef } from "react";
import { LightBall } from "./Assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Cap2() {
  const refs = useRef({
    title: useRef(null),
    content1: useRef(null),
    lightBall: useRef(null),
    spanContent: useRef(null),
  });
  useLayoutEffect(() => {
    const { title, content1, lightBall, spanContent } = refs.current;
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(title.current, {
      scrollTrigger: {
        start: "top bottom",
        end: "bottom center",
        trigger: title.current,
        scrub: 1,
      },
      x: -20,
      opacity: 0,
      delay: 0.5,
    });

    gsap
      .timeline({
        scrollTrigger: {
          start: "center center",
          end: "bottom center",
          trigger: content1.current,
          scrub: 1,
          pin: true,
        },
      })
      .from(lightBall.current, {
        scale: 2,
        ease: "power2.inOut",
      })
      .from(spanContent.current, {
        x: -600,
        opacity: 0,
        ease: "power2.inOut",
      })
      .to(content1.current, {
        background: "#194892",
      });
  }, []);

  return (
    <>
      <section id="chapter-2">
        <div className="title">
          <h2 ref={refs.current.title}>
            Capítulo 2: El nacimiento de la fotografía
          </h2>
        </div>
        <div className="content-1" ref={refs.current.content1}>
          <div className="lightBall" ref={refs.current.lightBall}>
            <LightBall width="100%" />
          </div>
          <span ref={refs.current.spanContent}>
            Del Griego: Foto (luz) y graifa (escritura)
          </span>
        </div>
      </section>

      <style jsx>{`
        #chapter-2 {
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
        }

        #chapter-2 .title {
          background-color: #000;
          padding: 130px 70px;
          width: 100%;
          color: #fff;
        }

        #chapter-2 .title h2 {
          font-size: 3.5em;
        }

        #chapter-2 .content-1 {
          background: #000;
          color: #fff;
          padding: 0;
          margin: 0;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        #chapter-2 .content-1::before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 400px;
          background: #194892;
        }
        #chapter-2 .content-1 span {
          font-size: 2.5em;
        }

        #chapter-2 .lightball {
          width: 50px;
          height: 50px;
        }
      `}</style>
    </>
  );
}

export default Cap2;
