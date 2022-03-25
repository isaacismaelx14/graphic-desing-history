import Image from "next/image";
import { useEffect } from "react";
import useAnimation from "../hooks/useAnimation";

function Cap3() {
  const animate = useAnimation({ scrollTrigger: true });
  useEffect(() => {
    const defaultConfig = {
      start: "center center",
      end: "bottom top",
      pin: true,
      scrub: true,
    };
    const titleMainTL = animate.scrollTimeLine({
      target: "#chapter-3 .title-main",
      scrollConfig: defaultConfig,
    });
    const content1TL = animate.scrollTimeLine({
      target: "#chapter-3 .content-1",
      scrollConfig: defaultConfig,
    });

    const content2TL = animate.scrollTimeLine({
      target: "#chapter-3 .content-2",
      scrollConfig: defaultConfig,
    });

    const content3TL = animate.scrollTimeLine({
      target: "#chapter-3 .content-3",
      scrollConfig: defaultConfig,
    });

    const content4TL = animate.scrollTimeLine({
      target: "#chapter-3 .content-4",
      scrollConfig: defaultConfig,
    });

    const contents = [content1TL, content2TL, content3TL, content4TL];
    titleMainTL.from(
      "#chapter-3 .title-main",
      {
        background: "linear-gradient(to right, #000, #000)",
      },
      "+=1"
    );

    titleMainTL.from("#chapter-3 .title-main", {
      background: "linear-gradient(to right, #300166, rgb(255 209 5 / 62%))",
    });

    titleMainTL.from(
      "#chapter-3 .title-main span",
      {
        opacity: 0,
        color: "#000",
        webkitFilter: "blur(15px)",
        scale: 0.3,
      },
      "<"
    );

    contents.forEach((content, index) => {
      index = index + 1;
      content
        .from(`#chapter-3 .content-${index} .blur`, {
          opacity: 0,
        })
        .from(
          `#chapter-3 .content-${index} .darken`,
          {
            opacity: 0,
          },
          `<`
        )
        .from(`#chapter-3 .content-${index} .line-1`, {
          opacity: 0,
          x: -100,
        });
    });
  }, [animate]);
  return (
    <>
      <div id="chapter-3">
        <div className="title-main">
          <span>Capítulo 3: La escuela de la Bauhaus</span>
        </div>
        <div className="content-1 content">
          <div className="line-1 on-blur">
            <span>
              Abril de 1919 una de las escuelas más importantes del mundo abre
              sus puertas.
            </span>
          </div>
          <div className="image"></div>
          <div className="blur"></div>
          <div className="darken"></div>
        </div>
        <div className="content-2 content">
          <div className="line-1 on-blur">
            <span> Fue fundada por el arquitecto Walter Gropius.</span>
          </div>
          <div className="image"></div>
          <div className="blur"></div>
          <div className="darken"></div>
        </div>
        <div className="content-3 content">
          <div className="line-1 on-blur">
            <span>
              En 1931, la Bauhaus se vio obligada a cerrar sus puertas por
              motivos políticos, pero Mies van der Rohe, el entonces director,
              decidió continuar el proyecto en Berlín.
            </span>
          </div>
          <div className="image"></div>
          <div className="blur"></div>
          <div className="darken"></div>
        </div>
        <div className="content-4 content">
          <div className="line-1 on-blur">
            <span>
              La influencia de la Bauhaus en el mundo entero es algo que todavía
              se puede apreciar pueden citarse las diversas construcciones y
              edificios repartidos a lo largo y ancho del mundo.
            </span>
          </div>
          <div className="image"></div>
          <div className="blur"></div>
          <div className="darken"></div>
        </div>
      </div>
      <style jsx>{`
        #chapter-3 .title-main {
          align-items: center;
          background: rgb(0, 142, 135);
          background: radial-gradient(circle, #008e87 0%, #194892 100%);
          color: #fff;
          display: flex;
          justify-content: center;
          min-height: 100vh;
          width: 100%;
        }

        #chapter-3 .title-main span {
          font-size: 50px;
        }
        #chapter-3 .content {
          display: flex;
          position: relative;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: 100vh;
          background: #194892;
          color: #fff;
        }

        #chapter-3 .content .image {
          position: absolute;
          padding: 20px 0;
          width: 100%;
          height: 100%;
          min-height: 500px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        #chapter-3 .content .line-1 {
          width: 90%;
          max-width: 600px;
          text-align: justify;
        }
        #chapter-3 .content .line-1 span {
          font-size: 30px;
        }
        #chapter-3 .content-1 .image {
          background-image: url("/img/bauhaus.jpg");
        }
        #chapter-3 .content-2 .image {
          background-image: url("/img/walter-gropius.jpg");
        }
        #chapter-3 .content-3 .image {
          background-image: url("/img/mies-van-der-rohe.jpg");
          background-position: top;
        }

        #chapter-3 .content-4 .image {
          background-image: url("/img/work-1.jpg");
        }
        #chapter-3 .content-4 .line-1 .image-swipe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export default Cap3;
