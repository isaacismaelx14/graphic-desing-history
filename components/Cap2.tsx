import { useLayoutEffect, useRef } from "react";
import { LightBall } from "./Assets";
import Image from "next/image";
import useAnimation from "../hooks/useAnimation";

function Cap2() {
  const animation = useAnimation({ scrollTrigger: true });
  const refs = useRef({
    title: useRef(null),
    content1: useRef(null),
    content2: useRef(null),
    lightBall: useRef(null),
    spanContent: useRef(null),
    content3: useRef(null),
  });

  useLayoutEffect(() => {
    const { title, content1, lightBall, spanContent, content3 } = refs.current;
    const scrollTriggerLines = {
      start: "top bottom",
      end: "center center",
      scrub: 0.2,
    };

    animation.from(lightBall.current, {
      x: -100,
      opacity: 0,
    });
    animation
      .createScrollTriggerTimeLine({
        target: title.current,
        scrollConfig: {
          start: "top bottom",
          end: "bottom center",
        },
      })
      .from(title.current, {
        x: -20,
        opacity: 0,
        delay: 0.5,
      })
      .to(title.current, {
        x: 60,
      });

    animation
      .createScrollTriggerTimeLine({
        target: content1.current,
        scrollConfig: {
          start: "center center",
          end: "bottom top",
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

    animation
      .createScrollTriggerTimeLine({
        target: content3.current,
        scrollConfig: {
          start: "center center",
          end: "bottom top",
          pin: true,
        },
      })
      .from("#chapter-2 .title__content-3 .title__t", {
        scale: 0,
      });

    animation.from("#chapter-2 .title__content-3 .emoji", {
      scrollTrigger: {
        trigger: "#chapter-2 .title__content-3 span",
        start: "center center",
        end: "bottom top",
        scrub: 0.2,
      },
      opacity: 0,
      y: 300,
    });

    animation.multiFrom(
      [".lines.l2 .content-lines", ".lines.l1 .img", ".lines.l3 .img"],
      {
        scrollTrigger: scrollTriggerLines,
        x: -innerWidth * 1,
      }
    );

    animation.multiFrom(
      [
        ".lines.l1 .content-lines",
        ".lines.l2 .img",
        ".lines.l3 .content-lines",
      ],
      {
        scrollTrigger: scrollTriggerLines,
        x: innerWidth * 1,
      }
    );
  }, [animation]);

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
        <div className="content-2" ref={refs.current.content2}>
          <div className="lines l1">
            <div className="img">
              <Image
                src="/img/Joseph-Niepce.jpg"
                alt="Joseph Niepce"
                width="450px"
                height="590px"
              />
            </div>
            <div className="content-lines">
              <h2 className="title-lines">En 1822</h2>
              <span className="pagraph">
                El inventor francés Joseph N. Niepce (1765-1833) obtuvo la
                primera fotografía permanente, pero deberían transcurrir algunos
                años antes de que esa técnica resultara verdaderamente practica.
              </span>
            </div>
          </div>
          <div className="lines l2 reverse">
            <div className="img">
              <Image
                src="/img/Louis-Mandé.jpg"
                alt="Louis Mandé"
                width="450px"
                height="590px"
              />
            </div>
            <div className="content-lines">
              <h2 className="title-lines">En 1839</h2>
              <span className="pagraph">
                Louis Jacques Mandé Daguerre había aprendido a disolver las
                sales intactas mediante una solución de tisulfato de sodio, de
                tal manera que lo captado quedaba permanente.
              </span>
            </div>
          </div>
        </div>
        <div className="content-3" ref={refs.current.content3}>
          <div className="title__content-3">
            <span className="title__t">
              Aunque el avance era notable, se tardaba alrededor de 25 a 30
              minutos en efectuar una toma fotográfica, y eso si había sol. Pero
              este no era su principal inconveniente, sino la dificultad para
              obtener copias.
            </span>
            <span role="img" aria-label="sadface" className="emoji">
              &#128546;
            </span>
          </div>
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
          top: 99%;
          left: 0;
          width: 100%;
          height: 50px;
          background: #194892;
        }
        #chapter-2 .content-1 span {
          font-size: 2.5em;
          margin-buttom: 50px;
        }

        #chapter-2 .lightball {
          width: 50px;
          height: 50px;
        }

        #chapter-2 .content-2 {
          background: #194892;
          color: #fff;
          width: 100%;
          min-height: 100vh;
        }

        #chapter-2 .image-1 {
          border-radius: 10px;
        }

        #chapter-2 .content-2 {
          padding: 30px 50px;
          padding-bottom: 150px;
        }
        #chapter-2 .content-2 .lines {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }
        #chapter-2 .content-2 .img {
          border-radius: 80px;
          background: var(--color-1);
          box-shadow: 0 0 15pt 10pt var(--color-1);
          padding: 10px;
        }
        #chapter-2 .content-2 .lines.reverse {
          flex-direction: row-reverse;
        }

        #chapter-2 .content-2 .content-lines {
          width: 50%;
          font-size: 30px;
          text-align: left;
        }
        #chapter-2 .content-2 .content-lines .title-lines {
          font-size: 40px;
          text-align: justify;
          margin: 0;
          padding: 0;
          color: var(--color-1);
        }
        #chapter-2 .content-2 .lines.reverse .content-lines {
          text-align: right;
        }
        #chapter-2 .content-2 .lines.reverse .title-lines {
          text-align: right;
        }
        #chapter-2 .title__content-3 {
          background: #000;
          width: 100%;
          min-height: 100vh;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        #chapter-2 .title__content-3 span {
          font-size: 40px;
          text-align: justify;
          width: 60%;
        }
        #chapter-2 .title__content-3 .emoji {
          font-size: 230px;
          text-align: center;

          width: 60%;
        }
      `}</style>
    </>
  );
}

export default Cap2;
