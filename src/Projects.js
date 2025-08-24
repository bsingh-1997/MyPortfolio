
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Projects.css";


// export default function Projects() {
//     gsap.registerPlugin(ScrollTrigger);
//     const sectionRef = useRef(null);
    
//     const PROJECTS = [
//       "https://i.pinimg.com/originals/53/44/9f/53449fa87702af80374c45b87080c639.jpg",
//       "https://i.pinimg.com/originals/53/44/9f/53449fa87702af80374c45b87080c639.jpg",
//       "https://i.pinimg.com/originals/53/44/9f/53449fa87702af80374c45b87080c639.jpg",
//       "https://i.pinimg.com/originals/53/44/9f/53449fa87702af80374c45b87080c639.jpg",
//     ];



    
//   const isDesktop = window.innerWidth > 768;
// // projects scroll 
//   useEffect(() => {
// // if(loading)return;
//       if (isDesktop) {
//         setupHorizontalScroll();
//       } else {
//         const wrapper = sectionRef.current.querySelector(".project-wrapper");
//         wrapper.style.overflowX = "auto";
//         wrapper.style.scrollSnapType = "x mandatory";
//       }
    
//     // return () => clearTimeout(timeout);
//   }, []);

// const setupHorizontalScroll = () => {
//   const wrapper = sectionRef.current.querySelector(".project-wrapper");
//   const textBlock = sectionRef.current.querySelector(".project-text");

//   const elementWidth = wrapper.scrollWidth;
//   wrapper.style.width = `${elementWidth}px`;

//   const width = window.innerWidth - elementWidth;
//   const duration = `${(elementWidth / window.innerHeight) * 100}%`;

//   const tl = gsap.timeline({ defaults: { ease: "none" } });
//   tl.to(wrapper, { x: width });

//   // Horizontal pin for images
//   ScrollTrigger.create({
//     trigger: wrapper,
//     start: "bottom bottom",
//     end: duration,
//     scrub: 0,
//     pin: true,
//     pinSpacing: "margin",
//     animation: tl,
//     invalidateOnRefresh: true,
//   });

//   // Pin text
//   ScrollTrigger.create({
//     trigger: wrapper,
//     start: "bottom bottom",
//     end: duration,
//     pin: textBlock,
//     pinSpacing: false,
//   });

//   // Fade in text at start of pin
// //   gsap.fromTo(
// //     textBlock,
// //     { opacity: 0, y: 30 },
// //     {
// //       opacity: 1,
// //       y: 0,
// //       ease: "power1.out",
// //       scrollTrigger: {
// //         trigger: textBlock,
// //         start: "top 80%",
// //         end: "top 60%",
// //         scrub: true,
// //       },
// //     }
// //   );

//   // Fade in each image as it comes into view horizontally
// //   gsap.utils.toArray(".project-card").forEach((card) => {
// //     gsap.fromTo(
// //       card,
// //       { opacity: 0.2, scale: 0.95 },
// //       {
// //         opacity: 1,
// //         scale: 1,
// //         scrollTrigger: {
// //           trigger: card,
// //           containerAnimation: tl, // link fade to horizontal scroll
// //           start: "left center",
// //           end: "right center",
// //           scrub: true,
// //         },
// //       }
// //     );
// //   });
// };


//   return (
    
// <section ref={sectionRef} className="projects-section">
//   <div className="project-text">
//     <h1  style={{ fontSize: '1em', margin: '0' }}>Projects</h1>
//     <h1  style={{ color: 'cyan', fontSize: '3em', marginTop: '0' }}>My Projects</h1>
//     <h3 >
//       Some things I've built with love, expertise, and a pinch of magical ingredients.
//     </h3>
//   </div>

//   <div className="horizontal-scroll">
//     <div className="project-wrapper">
//       {PROJECTS.map((src, idx) => (
//         <div className="project-card" key={idx}>
//           <img src={src} alt={`Project ${idx + 1}`} />
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
//   );
// }




// src/Projects.js
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

export default function Projects({ loading = false }) {
  const sectionRef = useRef(null);
  const tlRef = useRef(null);
  const stMainRef = useRef(null);
  const stTextRef = useRef(null);

  // 👉 Replace with your real images
  const PROJECTS = [
    "https://i.pinimg.com/originals/53/44/9f/53449fa87702af80374c45b87080c639.jpg",
    "https://i.pinimg.com/originals/53/44/9f/53449fa87702af80374c45b87080c639.jpg",
    "https://i.pinimg.com/originals/53/44/9f/53449fa87702af80374c45b87080c639.jpg",
    "https://i.pinimg.com/originals/53/44/9f/53449fa87702af80374c45b87080c639.jpg",
  ];

  const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;

  useEffect(() => {
    if (loading) return;

    const section = sectionRef.current;
    const wrapper = section.querySelector(".project-wrapper");
    const textBlock = section.querySelector(".project-text");

    const killAll = () => {
      tlRef.current && tlRef.current.kill();
      stMainRef.current && stMainRef.current.kill();
      stTextRef.current && stTextRef.current.kill();
      tlRef.current = null;
      stMainRef.current = null;
      stTextRef.current = null;
    };

    // Wait for images (so scrollWidth is correct)
    const imgs = Array.from(wrapper.querySelectorAll("img"));
    let pending = imgs.length;
    const done = () => {
      if (--pending <= 0) init();
    };
    if (pending === 0) init();
    else imgs.forEach(img => (img.complete ? done() : img.addEventListener("load", done)));

    function init() {
      killAll();

      if (!isDesktop) {
        // Mobile: simple horizontal scroll with snap
        wrapper.style.transform = "translate3d(0,0,0)";
        wrapper.style.width = "auto";
        ScrollTrigger.refresh();
        return;
      }

      const scrollDistance = Math.max(0, wrapper.scrollWidth - window.innerWidth);

      const tl = gsap.timeline({ defaults: { ease: "none" } });
      tl.to(wrapper, { x: -scrollDistance });
      tlRef.current = tl;

      // Pin the whole section and drive the horizontal tween
      const stMain = ScrollTrigger.create({
        trigger: section,
        start: "top bottom",           // starts when section top hits bottom of viewport
        end: () => "+=" + scrollDistance,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        animation: tl,
        pinSpacing: true,
        invalidateOnRefresh: true,
      });
      stMainRef.current = stMain;

      // Pin the text block (so it stays put) during the same range
      const stText = ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: () => "+=" + scrollDistance,
        pin: textBlock,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
      stTextRef.current = stText;

      // Optional: fade/scale each card as it comes into the viewport horizontally
      gsap.utils.toArray(".project-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.35, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl, // sync with the horizontal tween
              start: "left 80%",
              end: "right 20%",
              scrub: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      killAll();
    };
  }, [loading, isDesktop]);

  return (
    <section ref={sectionRef} className="projects-section">
      <div className="project-text">
        <h1 className="proj-kicker">Projects</h1>
        <h1 className="proj-title">My Projects</h1>
        <h3 className="proj-sub">
          Some things I’ve built with love, expertise, and a pinch of magical ingredients.
        </h3>
      </div>

      <div className="horizontal-scroll">
        <div className="project-wrapper">
          {PROJECTS.map((src, idx) => (
            <div className="project-card" key={idx}>
              <img src={src} alt={`Project ${idx + 1}`} />
            </div>
          ))}
          {/* end spacer so last image fully shows */}
          <div className="end-spacer" />
        </div>
      </div>
    </section>
  );
}
