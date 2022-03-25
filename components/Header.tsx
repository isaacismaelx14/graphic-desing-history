import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
type IProps = {
  styles: { readonly [key: string]: string };
};

function Header({ styles }: IProps) {
  const HeaderRef = useRef<HTMLDivElement>(null);
  const HeaderTitleRef = useRef<any>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!HeaderRef.current) return;
    const count = 150,
      particleClass = "particle",
      particleColors = ["#ffffffb7", "#ffffffd0"],
      container = HeaderRef.current,
      w = container.offsetWidth,
      h = container.offsetHeight;
    let elem;

    for (var i = 0; i < count; i++) {
      elem = document.createElement("div");
      elem.className = particleClass;
      elem.style.width = elem.style.height = Math.random() * 10 + "px";
      elem.style.top = Math.random() * h + "px";
      elem.style.left = Math.random() * w + "px";
      elem.style.background = particleColors[Math.floor(Math.random() * 4)];
      container.appendChild(elem);
      gsap.set(elem, {
        x: gsap.utils.random(0, w),
        y: gsap.utils.random(0, h) - h * 0.7,
        scale: gsap.utils.random(0.5, 1),
        backgroundColor: gsap.utils.random(particleColors),
      });
      anime(elem);
    }

    function anime(elemnt: any) {
      gsap.to(elemnt, gsap.utils.random(5, 10), {
        y: h,
        ease: "none",
        repeat: -1,
        delay: -10,
      });
      gsap.to(elemnt, gsap.utils.random(1, 6), {
        x: "+=50",
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(elemnt, gsap.utils.random(1, 4), {
        opacity: 0,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  useEffect(() => {
    const HeaderTitle = HeaderTitleRef.current;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(HeaderTitle, {
      scrollTrigger: {
        scrub: 1,
      },
      y: -2500,
      color: "#fafafa",
    });
    const ram = getRandomInt(1, 4);
    bgRef.current?.style.backgroundImage = `url("/img/backgrounds/bg-${ram}.jpg"`;
  }, []);

  return (
    <section className={`${styles.header} header`} ref={HeaderRef}>
      <div className="apply-bg" ref={bgRef}></div>
      <h2
        className={`${styles.header_title} on_particle `}
        ref={HeaderTitleRef}
      >
        Historia del diseño gráfico
      </h2>
      <style jsx>{`
        .apply-bg {
          filter: blur(20px);
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </section>
  );
}

export default Header;
