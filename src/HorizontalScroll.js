import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true, // keeps section fixed while horizontal scrolling
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        overflow: "hidden",
        background: "#111"
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          height: "100%",
          width: "400%" // number of panels × 100%
        }}
      >
        <div className="panel" style={{ flex: "0 0 100%", background: "tomato" }}>
          <h1>Panel 1</h1>
        </div>
        <div className="panel" style={{ flex: "0 0 100%", background: "orange" }}>
          <h1>Panel 2</h1>
        </div>
        <div className="panel" style={{ flex: "0 0 100%", background: "skyblue" }}>
          <h1>Panel 3</h1>
        </div>
        <div className="panel" style={{ flex: "0 0 100%", background: "green" }}>
          <h1>Panel 4</h1>
        </div>
      </div>
    </section>
  );
}
