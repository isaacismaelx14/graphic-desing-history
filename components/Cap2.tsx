import { useEffect, useRef } from "react";
import { LightBall } from "./Assets";
import Image from "next/image";
import useAnimation from "../hooks/useAnimation";

function Cap2() {
  const animation = useAnimation({ scrollTrigger: true });
  const refs = useRef({
    title: useRef(null),
    content1: useRef(null),
    content2: useRef(null),
    content3: useRef(null),
    content4: useRef(null),
    content5: useRef(null),
    lightBall: useRef(null),
    spanContent: useRef(null),
  });

  useEffect(() => {
    if (false) return;
    const {
      title,
      content1,
      lightBall,
      spanContent,
      content3,
      content4,
      content5,
    } = refs.current;
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
      })
      .to("#chapter-2 .title__content-3", {
        background: "#194892",
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

    animation
      .createScrollTriggerTimeLine({
        target: content4.current,
        scrollConfig: {
          start: "center center",
          end: "bottom top",
          pin: true,
        },
      })
      .from("#chapter-2 .lines.lh .content-lines", {
        scale: 1.4,
      })
      .from("#chapter-2 .lines.lh .img-1", {
        x: "-400px",
        opacity: 0,
      })
      .from("#chapter-2 .lines.lh .img-2", {
        x: "400px",
        opacity: 0,
      })
      .from("#chapter-2 .lines.lh .image-caption", {
        y: "400px",
        opacity: 0,
      });

    animation.to("#chapter-2 .content-5 .slide-2", {
      x: -innerWidth * 1,
      opacity: 0,
    });
    animation.to("#chapter-2 .content-5 .slide-3", {
      x: -innerWidth * 1,
      opacity: 0,
    });
    animation.to("#chapter-2 .content-5 .slide-4", {
      x: -innerWidth * 1,
      opacity: 0,
    });

    animation
      .createScrollTriggerTimeLine({
        target: content5.current,
        scrollConfig: {
          start: "center center",
          end: "bottom top",
          scrub: 1.5,
          pin: true,
        },
      })
      .to(
        "#chapter-2 .content-5 .slide-1",
        {
          x: -innerWidth * 1,
        },
        "=0.3"
      )
      .from(
        "#chapter-2 .content-5 .slide-2",
        {
          x: innerWidth * 1,
          opacity: 1,
        },
        "-=0.5"
      )
      .to(
        "#chapter-2 .content-5 .slide-2 img",
        {
          webkitFilter: "blur(5px)",
        },
        "+=0.6"
      )
      .from(
        "#chapter-2 .content-5 .slide-2 .text",
        {
          opacity: 0,
          y: 400,
        },
        "<"
      )
      .to(
        "#chapter-2 .content-5 .slide-2",
        {
          x: -innerWidth * 1,
        },
        "=0.3"
      )

      .from(
        "#chapter-2 .content-5 .slide-3",
        {
          x: innerWidth * 1,
          opacity: 1,
        },
        "-=0.5"
      )
      .to(
        "#chapter-2 .content-5 .slide-3 img",
        {
          webkitFilter: "blur(5px)",
        },
        "+=0.6"
      )
      .from(
        "#chapter-2 .content-5 .slide-3 .text",
        {
          opacity: 0,
          x: -500,
        },
        "<"
      )

      .to(
        "#chapter-2 .content-5 .slide-3",
        {
          x: -innerWidth * 1,
        },
        "=0.3"
      )

      .from(
        "#chapter-2 .content-5 .slide-4",
        {
          x: innerWidth * 1,
          opacity: 1,
        },
        "-=0.5"
      )
      .to(
        "#chapter-2 .content-5 .slide-4 img",
        {
          webkitFilter: "blur(5px)",
        },
        "+=0.6"
      )
      .from(
        "#chapter-2 .content-5 .slide-4 .text",
        {
          opacity: 0,
          x: 500,
        },
        "<"
      )
      .to("#chapter-2 .content-5 .slide-4", {}, "+=1");
  }, [animation]);

  return (
    <>
      <section id="chapter-2">
        <div className="title-main">
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
        <div
          className="content-2"
          ref={refs.current.content2}
          style={{ paddingTop: "120px" }}
        >
          <div className="lines l3">
            <div className="img">
              <Image
                src="/img/william-henry-talbot.png"
                alt="William Henry Talbot"
                width="450px"
                height="590px"
              />
            </div>
            <div className="content-lines">
              <h2 className="title-lines">En 1841</h2>
              <span className="pagraph">
                William Henry Talbot fue quien superó el problema con lo que él
                llamó &quot;calotipos&quot; Con sus &quot;calotipos&quot; se
                obtenían unos negativos que luego debían ser traspasados a
                positivos en otras hojas.
              </span>
            </div>
          </div>
        </div>
        <div className="content-4" ref={refs.current.content4}>
          <div className="lines lh">
            <div className="img">
              <Image
                src="/img/first_book.jpg"
                alt="Louis Mandé"
                width="400px"
                height="490px"
                className="img-1"
              />
              <Image
                src="/img/first_book_pic.jpg"
                alt="Louis Mandé"
                width="550px"
                height="490px"
                className="img-2"
              />
            </div>
            <div className="content-lines" style={{ textAlign: "center" }}>
              <h2 className="title-lines" style={{ textAlign: "center" }}>
                En 1844
              </h2>
              <span className="pagraph">
                Se publicó el primer libro ilustrado con fotografías.
              </span>
            </div>
            <div className="image-caption">
              <span className="title-lines">
                <strong>&quot;The Pencil of Nature&quot;</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="content-5" ref={refs.current.content5}>
          <div className="slide-1 slide">
            <h2 className="title">La cámara fotográfica</h2>
          </div>
          <div className="slide-2 slide">
            <div className="text">
              <span className="pagraph">
                La revolución fotográfica provocada por George Eastman con el
                lanzamiento de las primeras cámaras Kodak portátiles y sus
                películas prefabricadas, todas las cámaras utilizaban placas y
                película en hojas, emulsionadas por el propio fotógrafo.
              </span>
            </div>
            <div className="image">
              <Image src="/img/kodak_camera.jpg" alt="kodak" layout="fill" />
            </div>
          </div>
          <div className="slide-3 slide">
            <div className="text">
              <span className="pagraph">
                A finales del siglo pasado, con la novedad de la fotografía,
                aparecieron cámaras curiosísimas tales como sombreros-cámara,
                relojes-cámara e incluso pistolas-cámara
              </span>
            </div>
            <div className="image">
              <Image src="/img/gun_camera.jpg" alt="gun camera" layout="fill" />
            </div>
          </div>
          <div className="slide-4 slide">
            <div className="text">
              <span className="pagraph">
                La mejora de las cámaras de 35 mm. que siguió a la segunda
                guerra mundial, hizo que las cámaras para película en rollo
                fuesen perdiendo popularidad. Actualmente los únicos modelos que
                sobreviven son de extraordinaria calidad y los usan
                mayoritariamente los profesionales debido a su mayor tamaño de
                negativo.
              </span>
            </div>
            <div className="image">
              <Image
                src="/img/kodak_35mm_camera.jpg"
                alt="kodak 35-mm"
                layout="fill"
              />
            </div>
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

        #chapter-2 .title-main {
          background-color: #000;
          padding: 130px 70px;
          width: 100%;
          color: #fff;
        }

        #chapter-2 .title-main h2 {
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
          background: var(--color-primary);
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
          background: var(--color-primary);
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
        #chapter-2 .lines {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
        }
        #chapter-2 .lines.lh {
          padding-top: 90px;
          flex-direction: column;
          position: relative;
        }
        #chapter-2 .lines.lh .content-lines {
          flex-direction: column;
          position: absolute;
        }

        #chapter-2 .lines.lh .img {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 44;
        }

        #chapter-2 .lines.reverse {
          flex-direction: row-reverse;
        }

        #chapter-2 .content-lines {
          width: 50%;
          font-size: 30px;
          text-align: left;
        }
        #chapter-2 .title-lines {
          font-size: 40px;
          text-align: justify;
          margin: 0;
          padding: 0;
          color: var(--color-1);
        }
        #chapter-2 .lines.reverse .content-lines {
          text-align: right;
        }
        #chapter-2 .lines.reverse .title-lines {
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

        #chapter-2 .content-4 {
          background: var(--color-primary);
          color: #fff;
          width: 100%;
          min-height: 100vh;
        }

        #chapter-2 .content-5 {
          background: rgb(25, 72, 146);
          background: linear-gradient(
            180deg,
            rgba(25, 72, 146, 1) 0%,
            rgba(48, 1, 102, 1) 100%
          );
          color: #fff;
          width: 100%;
          min-height: 100vh;
          display: flex;
          position: relative;
        }

        #chapter-2 .content-5 .title {
          font-size: 3.5em;
          font-weight: 100;
        }

        #chapter-2 .content-5 .slide {
          position: absolute;
          width: 100vw;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #chapter-2 .content-5 .slide-1 {
          background: #000;
        }
        #chapter-2 .content-5 .slide-2 {
          background: #fdfd;
        }
        #chapter-2 .content-5 .image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        #chapter-2 .content-5 .text {
          position: relative;
          color: #fff;
          font-weight: 200;
          z-index: 44;
          font-size: 40px;
          text-align: justify;
          width: 80%;
          background: #000000d6;
          padding: 33px 69px;
          padding: 10px 20px;
          border-radius: 20px;
        }
      `}</style>
    </>
  );
}

export default Cap2;
