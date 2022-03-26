import Image from "next/image";
import { useEffect } from "react";
import useAnimation from "../hooks/useAnimation";

function Cap4() {
  const animation = useAnimation({ scrollTrigger: true });

  useEffect(() => {
    animation.multiFrom(
      [
        ".con-1",
        ".con-2",
        ".con-3",
        ".con-4",
        ".con-5",
        ".con-6",
        ".con-7",
        ".con-8",
        ".con-9",
      ],
      {
        scrollTrigger: {
          scrub: 1,
          start: "top center",
          end: "center center",
        },

        opacity: 0,
        webkitFilter: "blur(10px)",
      }
    );
  }, [animation]);
  return (
    <>
      <div id="chapter-4">
        <div className="title-main content">
          <span>Capítulo 4: Orígenes del diseño grafico</span>
        </div>

        <div className="content-1 ">
          <div className="line-1 line">
            <div className="text-content con-1">
              <Image
                src="/img/art-nouveau.jpg"
                alt="Art Nouveau"
                width="260px"
                height="450px"
                className="ignoredefaultRadius"
              />
              <span>El art nouveau</span>
            </div>

            <div className="text-content con-2">
              <Image
                src="/img/cubismo.jpg"
                alt="cubismo"
                width="260px"
                height="450px"
                className="ignoredefaultRadius"
              />
              <span>El cubismo</span>
            </div>
            <div className="text-content con-3">
              <Image
                src="/img/futurismo.jpg"
                alt="futurismo"
                width="260px"
                height="450px"
                className="ignoredefaultRadius"
              />
              <span>Futurismo</span>
            </div>
          </div>

          <div className="line-2 line">
            <div className="text-content con-4">
              <Image
                src="/img/dadaismo.jpg"
                alt="Dadaísmo"
                width="320px"
                height="450px"
                className="ignoredefaultRadius"
              />
              <span>Dadaísmo</span>
            </div>

            <div className="text-content con-5">
              <Image
                src="/img/surrealismo.jpg"
                alt="Surrealismo"
                width="320px"
                height="450px"
                className="ignoredefaultRadius"
              />
              <span>Surrealismo</span>
            </div>
            <div className="text-content con-6">
              <Image
                src="/img/constructivismo.jpg"
                alt="Constructivismo"
                width="320px"
                height="450px"
                className="ignoredefaultRadius"
              />
              <span>Constructivismo</span>
            </div>
          </div>

          <div className="line-3 line">
            <div className="text-content con-7">
              <Image
                src="/img/artdeco.jpg"
                alt="El art déco"
                width="320px"
                height="450px"
                className="ignoredefaultRadius"
              />
              <span>El art déco</span>
            </div>

            <div className="text-content con-8">
              <Image
                src="/img/de-stijl.png"
                alt="De Stijl"
                width="320px"
                height="450px"
                className="ignoredefaultRadius"
              />
              <span>De Stijl</span>
            </div>
            <div className="text-content con-9">
              <Image
                src="/img/abstract.jpg"
                alt="Expresionismo Abstracto"
                width="320px"
                height="450px"
                className="ignoredefaultRadius"
              />
              <span>Expresionismo Abstracto</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        #chapter-4 .title-main {
          background: var(--color-3);
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }
        #chapter-4 .title-main span {
          font-size: 2rem;
        }

        #chapter-4 .text-content {
          margin-bottom: 2rem;
          position: relative;
          width: 100%;
        }
        #chapter-4 .content-1 {
          align-items: center;
          gap: 30px;
          width: 100%;
          min-  height: 100vh;
          margin: 0 auto;
          text-align: justify;
        }

        #chapter-4 .content-1 .line {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 100vh;
            margin: 0 auto;
            text-align: justify;
            padding: 1rem 2rem;
            gap: 30px;
        }

        #chapter-4 .content-1 .line .text-content{
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #fff;
            gap: 30px;
        }
        
        #chapter-4 .content-1 .line.line-1{
            background: var(--color-primary);
        }
        #chapter-4 .content-1 .line.line-2{
            background: var(--color-2);
        }
        #chapter-4 .content-1 .line span{
            color: var(--color-1);
            font-size: 1.5rem;
            font-weight: 500;
        }

      `}</style>
    </>
  );
}

export default Cap4;
