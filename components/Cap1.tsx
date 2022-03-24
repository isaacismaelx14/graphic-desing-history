import Image from "next/image";
import { useEffect, useRef } from "react";
import useAnimation from "../hooks/useAnimation";

function Cap1() {
  const titleMainRef = useRef(null);
  const content1Ref = useRef(null);
  const content2Ref = useRef(null);
  const content3Ref = useRef(null);
  const content4Ref = useRef(null);
  const content5Ref = useRef(null);
  const content6Ref = useRef(null);
  const animation = useAnimation({ scrollTrigger: true });
  useEffect(() => {
    const titleMain = titleMainRef.current;
    const content1 = content1Ref.current;
    const content2 = content2Ref.current;
    const content3 = content3Ref.current;
    const content4 = content4Ref.current;
    const content5 = content5Ref.current;
    const content6 = content6Ref.current;

    const sTrigger = {
      start: "top center",
      end: "center center",
      scrub: true,
      trigger: content2,
    };

    if (false) return;

    animation
      .scrollTimeLine({
        target: titleMain,
        scrollConfig: {
          start: "center center",
          end: "bottom top",
          pin: true,
        },
      })
      .from("#chapter-1 .title-main .line-1 span", {
        rotate: 90,
        x: innerWidth * 1,
        opacity: 0,
      })
      .to(
        "#chapter-1 .title-main .line-1 span",
        {
          scale: 1.5,
          color: "#ffd330",
        },
        "+=0.6"
      )
      .to(
        "#chapter-1 .title-main .line-1 span",
        {
          color: "#ffd330",
        },
        "<"
      );

    animation
      .scrollTimeLine({
        target: content1,
        scrollConfig: {
          start: "center center",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      })
      .from(
        "#chapter-1 .content-1 .blur",
        {
          opacity: 0,
        },
        "+=1"
      )
      .from(
        "#chapter-1 .content-1 .darken",
        {
          opacity: 0,
        },
        "<"
      )
      .from(
        "#chapter-1 .content-1 .line-1",
        {
          opacity: 0,
        },
        "<"
      )
      .from(
        "#chapter-1 .content-1 .line-2",
        {
          opacity: 0,
          y: 400,
        },
        ">"
      )
      .to("#chapter-1 .content-1 .container", {
        scale: 1.4,
      });

    // Content 3 Animation
    animation
      .scrollTimeLine({
        target: content3,
        scrollConfig: {
          start: "center center",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      })
      .from(
        "#chapter-1 .content-3 .blur",
        {
          opacity: 0,
        },
        "+=0.5"
      )
      .from(
        "#chapter-1 .content-3 .darken",
        {
          opacity: 0,
        },
        "<"
      )
      .from("#chapter-1 .content-3 .image", {
        opacity: 0,
        x: -300,
      })
      .from(
        "#chapter-1 .content-3 .text-content",
        {
          opacity: 0,
          x: 300,
        },
        "<"
      )
      .to("#chapter-1 .content-3 .line-1", {
        scale: 1.2,
      })
      .to("#chapter-1 .content-3 .line-1", {
        x: -innerWidth * 1,
      })
      .from(
        "#chapter-1 .content-3 .line-2",
        {
          x: innerWidth * 1,
        },
        "<"
      )
      .to("#chapter-1 .content-3 .line-2", {
        scale: 1.2,
      });

    //Content 4 Animation
    animation
      .scrollTimeLine({
        target: content4,
        scrollConfig: {
          start: "center center",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      })
      .from("#chapter-1 .content-4 .text-content h2", {
        pointerEvents: "none",
        opacity: 0,
        y: -100,
      })
      .from("#chapter-1 .content-4 .text-content p", {
        opacity: 0,
        x: innerWidth * 1,
      })
      .from("#chapter-1 .content-4 .text-content img", {
        pointerEvents: "none",
        opacity: 0,
        y: innerHeight * 1,
      });
    //Content 5 Animation
    animation
      .scrollTimeLine({
        target: content5,
        scrollConfig: {
          start: "center center",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      })
      .from("#chapter-1 .content-5 .text-content h2", {
        pointerEvents: "none",
        opacity: 0,
        y: -100,
      })
      .from("#chapter-1 .content-5 .text-content p", {
        opacity: 0,
        x: innerWidth * 1,
      })
      .from("#chapter-1 .content-5 .text-content .l1", {
        pointerEvents: "none",
        opacity: 0,
        x: -innerWidth * 1,
      })
      .from("#chapter-1 .content-5 .text-content .l2", {
        pointerEvents: "none",
        opacity: 0,
        x: innerWidth * 1,
      })
      .from("#chapter-1 .content-5 .text-content .l3", {
        pointerEvents: "none",
        opacity: 0,
        y: innerHeight * 1,
      });

    //Content 6 Animation
    animation
      .scrollTimeLine({
        target: content6,
        scrollConfig: {
          start: "center center",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      })
      .to(
        "#chapter-1 .content-6 .text-content h2",
        {
          opacity: 0,
        },
        "=+1.2"
      )
      .to(
        "#chapter-1 .content-6 .text-content p",
        {
          opacity: 0,
        },
        "<"
      )
      .to(
        content6,
        {
          background: "#000",
        },
        "+=1.2"
      );

    animation.to("#chapter-1 .content-6 .image", {
      scrollTrigger: {
        start: "center top",
        end: "bottom top",
        scrub: 1,
      },
      y: -200,
      opacity: 0,
    });

    animation.from("#chapter-1 .title-main .subtitle", {
      scrollTrigger: { start: "top center", end: "bottom center", scrub: true },
      y: innerHeight * 1,
      opacity: 0,
    });

    animation.from("#chapter-1 .content-2 .line-1 .text-content", {
      scrollTrigger: sTrigger,
      y: -200,
      opacity: 0,
    });
    animation.from("#chapter-1 .content-2 .line-1 .image", {
      scrollTrigger: sTrigger,
      y: 200,
      opacity: 0,
    });
    animation.from("#chapter-1 .content-2 .line-2 .text-content", {
      scrollTrigger: sTrigger,
      x: -200,
      opacity: 0,
    });
    animation.from("#chapter-1 .content-2 .line-2 .image", {
      scrollTrigger: sTrigger,
      x: 200,
      opacity: 0,
    });
  }, [animation]);
  return (
    <>
      <section id="chapter-1">
        <div className="title-main" ref={titleMainRef}>
          <div className="line-1">
            <span>Capítulo 1:</span> <span>Las publicaciones periódicas</span>
          </div>
          <span className="subtitle">Siglo XV</span>
        </div>
        {/* Content 1 */}
        <div className="content-1 renaissance" ref={content1Ref}>
          <div className="container on-blur">
            <div className="line-1 title">
              <span className="main">Renaissance </span>
              <span>(Renovación o Resurrección)</span>
            </div>
            <div className="line-2">
              <span>
                Termino que se empleo para indicar el perido que comienza en
                Italia entre los siglos XVI y XVII.
              </span>
            </div>
          </div>
          <div className="darken"></div>
          <div className="blur"></div>
        </div>
        {/* Content 2 */}
        <div className="content-2 content-texted" ref={content2Ref}>
          <div className="container text-item">
            <div className="line-1 line">
              <div className="image">
                <Image
                  src={"/img/primer_libro.jpg"}
                  alt="Primer libro"
                  className="round-img"
                  width={300}
                  height={400}
                />
              </div>
              <div className="text-content">
                <h2>1469</h2>
                <span>
                  En Florencia, se inicio el diseño tipográfico del Johannes del
                  Spira, orfebre de Manguncia, publico su primer libro en
                  Venecia,
                  <strong>Epistolae ad familiares de cicerón</strong>. Sweyheym
                  y Pannartz, lo reclamo como su invento original.
                </span>
              </div>
            </div>
          </div>
          <div className="container text-item">
            <div className="line-2 line">
              <div className="image">
                <Image
                  src={"/img/book_numbers.jpg"}
                  alt="Book"
                  className="round-img"
                  width={500}
                  height={400}
                />
              </div>
              <div className="text-content">
                <h2>1470</h2>
                <span>
                  se publica el primer libro tipográfico con los números de las
                  páginas impresas
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Content 3 */}
        <div className="content-3" ref={content3Ref}>
          <div className="blur "></div>
          <div className="darken"></div>
          <div className="line-1 line on-blur">
            <div className="image">
              <Image
                src={"/img/nicolas_jenson.jpg"}
                alt="Nicolas Jenson"
                className="round-img"
                width={500}
                height={400}
              />
            </div>
            <div className="text-content">
              <h2>Nicolas Jenson</h2>
              <span>
                Estableció la segunda imprenta en Venecia. Fue uno de los
                diseñadores tipográficos mas importantes de la historia y
                magnifico grabador de moldes.
              </span>
            </div>
          </div>
          <div className="line-2 line on-blur">
            <div className="text-content">
              <h2>La Gaceta</h2>
              <span>
                El sistema de la imprenta se extendió en toda Europa ya que
                reproducía los libros de forma sencilla.
              </span>
            </div>
          </div>
        </div>
        {/* Content 4 */}
        <div className="content-4 content-texted" ref={content4Ref}>
          <div className="box">
            <div className="text-content">
              <h2>Siglo XVII </h2>
              <p>
                Este siglo se considera el comienzo de la historia del
                periodismo en su sentido escrito
              </p>
              <p>
                Tenían gran aceptación por el público y se convirtió en un medio
                influyente, por tal razón los gobernantes prohibían su
                distribución. Nacimiento y estabilización de las primeras
                gacetas semanales. Pequeño formato de 4 pag. Sin opinión,
                próxima al poder se vendía principalmente mediante suscripción.
              </p>

              <div className="image">
                <Image
                  src={"/img/persons_imprenta.jpg"}
                  alt="Personas en una imprenta"
                  className="round-img"
                  width={900}
                  height={650}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Content 5 */}
        <div className="content-5 content-texted" ref={content5Ref}>
          <div className="box">
            <div className="text-content">
              <h2>Siglo XIX</h2>
              <p>
                Nació el primer diario francés impresas Napoleon tenían interés
                en controlar los medios impresos
              </p>
              <p>Factores que influyeron en est siglo:</p>

              <div className="list">
                <ul>
                  <li className="l1">Aceptación del constitucionalismo.</li>
                  <li className="l2">
                    Gracias a la revolución industrial aparece la prensa obrera.
                  </li>
                  <li className="l3">
                    La progresión alfabetización hace que haya más demanda de
                    noticias actuales.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="content-6 content-texted" ref={content6Ref}>
          <div className="text-content">
            <h2>En 1729 </h2>
            <div className="side-container">
              <p>Benjamin Franklin compro un periódico.</p>
              <div className="image">
                <Image
                  src={"/img/benjamin_franklin.jpg"}
                  alt="Benjamin Franklin"
                  className="round-img"
                  width={500}
                  height={620}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
      #chapter-1 .text-content h2{
          color: var(--color-1);
          font-size: 40px;
          font-weight: bold;
        }
        #chapter-1 .text-content {
          color:#fff;
        }
        #chapter-1 .title-main {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 250px;
        }

        #chapter-1 .title-main .line-1 {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        #chapter-1 .title-main .line-1 span {
          font-size: 35px;
          font-weig   ht: bold;
          color: #f5f5f5;
        }

        #chapter-1 .title-main .subtitle {
          padding-top: 125px;
          font-size: 50px;
          height: 100%;
          color: #f5f5f5;
        }

        #chapter-1 .content-1 {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        #chapter-1 .content-1 .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 50%;
          padding: 40px;
          /* border: solid 2px #f5f5f5;
          border-radius: 30px; */
        }
        #chapter-1 .content-1 .container .title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;
        }
        #chapter-1 .content-1 .container .title span {
          font-size: 30px;
          margin: 0;
        }
        #chapter-1 .content-1 .container .title span.main {
          font-size: 70px;
        }
        #chapter-1 .content-1 .container .line-2 {
          width: 60%;
          font-size: 25px;
          text-align: center;
        }
        #chapter-1 .content-texted {
          display: flex;
          flex-direction: row;
          align-items: center;
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: var(--color-2);
        }

        #chapter-1 .content-2 .container {
          width: 50%;
          padding: 20px;
          color: #f5f5f5;
          font-size: 30px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 40px 80px;
        }
        #chapter-1 .content-2 .container .line {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        #chapter-1 .content-2 .container .line-1 {
          flex-direction: column-reverse;
        }
        #chapter-1 .content-2 .text-item h2 {
          font-size: 40px;
          font-weight: bold;
          color: #ffd330;
        }
        #chapter-1 .content-2 .text-item .image {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px 20px;
        }
        #chapter-1 .content-2 .text-content {
          text-align: justify;
        }
        #chapter-1 .content-2 .line-2 .text-content {
          width: 70%;
        }

        #chapter-1 .content-3 {
          width: 100%;
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          gap:30px;
          position: relative;
        }
        #chapter-1 .content-3 .line {
          display: flex;
          flex-direction: row
          align-items: center;
          justify-content: center;
          width: 100%;
          gap:30px;
          position: absolute;

        }

        #chapter-1 .content-3 .line .text-content{
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 25px;
          width: 40%;
          text-align: justify;
        }
        #chapter-1 .content-3 .line .text-content h2{
          color: var(--color-1);
        }
        #chapter-1 .content-3 .line-2 .text-content{
          text-align:center;
          font-size: 32px;
        }
        #chapter-1 .content-4, #chapter-1 .content-5, #chapter-1 .content-6 {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align:justify;
          font-size: 24px;
          gap:30px;
        }
        #chapter-1 .content-texted h2{
          text-align:center;
          margin-bottom:20px;
        }
        #chapter-1 .content-texted p{
          margin-bottom:20px;
        }
        #chapter-1 .content-texted .box{
          display: flex;
          width: 90%;
          max-width: 800px;
        }

        #chapter-1 .content-6 .text-content{
          text-align: center;
        }

      `}</style>
    </>
  );
}

export default Cap1;
