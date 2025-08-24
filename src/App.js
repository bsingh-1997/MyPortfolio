

// src/App.js
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Typewriter } from "react-simple-typewriter";
import "./App.css"
import { FaGithub } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import HorizontalScroll from "./HorizontalScroll";
import Navbar from "./Navbar";
import './App.css'
import html from './logos/html.png'
import css from './logos/css.png'
import js from './logos/js.png'
import node from './logos/node.png'
import vite from './logos/vite.svg'
import vsc from './logos/vsc.png'
import redux from './logos/redux.svg'
import python from './logos/python.png'
import pm from './logos/postman-ic.png'
import git from './logos/git.svg'
import verc from './logos/logov.png'
import bs from './logos/bootstrap.png'
import ex from './logos/ExpressJS.png'
import gsaplogo from './logos/gsap.png'
import mysql from './logos/mysql.svg'
import thunder from './logos/thunder-icon.png'
import react from './logos/react.svg'
import mdb from './logos/mongodb.svg'
import Projects from "./Projects";
import emailjs from 'emailjs-com'
import loadingimg from './loadingg.gif'
import RotatingEarth from "./RotatingEarth";
import EarthGlobe from "./Earth";
import blogbrew from './blogbrew2.png'
import bscustom from './bscustom.png'
import { RxVercelLogo } from "react-icons/rx";
// import thunder from './logos/.svg'
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  
  const heroRef = useRef(null);
  const sectionRefs = useRef([]);
  const projectRefs = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);

   const letterRefs = useRef([]);

  // Bouncy letter hover in
  const handleHoverIn = (index) => {
    gsap.to(letterRefs.current[index], {
      y: -3,
      // scale: 1.3,
      scale: 1,
      color: "#00ffff",
      duration: 0.3,
      // ease: "bounce.out",
      ease: "elastic.out(1, 0.3)"

    });
  };

  // Letter hover out
  const handleHoverOut = (index) => {
    gsap.to(letterRefs.current[index], {
      y: 0,
      scale: 1,
      color: "#fff",
      duration: 0.3,
      ease: "power1.out",
      // ease: "elastic1.out",
    });
  };



      const [loading, setLoading] = useState(true);
// loadedr timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2.5s
    return () => clearTimeout(timer);
  }, []);





  // Scroll progress bar logic
  useEffect(() => { 
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);


    

    // Hero section animation
    gsap.from(heroRef.current, {
      opacity: 1,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });

    // Section animations
    sectionRefs.current.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          // start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 50,
        duration: 1.2,
        ease: "power2.out",
      });
    });

    // Project card animations (one by one)
    projectRefs.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 60,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out",
      });
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
// image animation
const imageRef = useRef(null)
   useEffect(() => {
    if (loading)return;
    gsap.to(imageRef.current, {
      y: -10,           // move 10px up
      duration: 1.5,      // 2 seconds per movement
      // ease: "easeInOut",// smooth easing
      ease: "none",// smooth easing
      yoyo: true,       // go back down
      repeat: -1        // loop forever
    });
  }, [loading]);



// hero timing animations
useEffect(() => {
  if (loading) return;
  const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power1.out" } });

  tl.fromTo(".greeting", { opacity: 0 }, { opacity: 1 })
    .fromTo(".name", { opacity: 0 }, { opacity: 1 })
    .fromTo(".tagline", { opacity: 0 }, { opacity: 1 })
    
    .fromTo(".button", { opacity: 0 }, { opacity: 1 },)
    .fromTo(".int2", { opacity: 0 }, { opacity: 1 },);

  return () => tl.kill();
}, [loading]);
// }, []);



// scroll fading 
useEffect(() => {
  if (loading) return; // don't start until loader is gone

  // ensure plugin registered (safe to call again)
  gsap.registerPlugin(ScrollTrigger);

  const els = gsap.utils.toArray(".scroll-fade");
  els.forEach((el) => {
    // make sure starting state is consistent
    gsap.set(el, { opacity: 0, y: 15 });

    // one timeline per element that maps to a scroll range
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 94%",   // when element top is near bottom of viewport -> start
        end: "top -30%",     // when element top reaches about middle -> mid/end of timeline
        scrub: true,        // tie animation progress to scroll
        invalidateOnRefresh: true,
        // markers: true,   // enable while debugging to see trigger positions
      },
    });

    // first half of timeline => fade in & settle
    tl.to(el, { opacity: 1, y: 0, duration: 1 });

    // second half => fade out while moving up
    tl.to(el, { opacity: 0, y: -5, duration: 1 });
  });


  // force a refresh so start/end and positions are correct
  ScrollTrigger.refresh();

  // cleanup on unmount
  return () => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
}, [loading]); // run when loader ends


// contactscroll
gsap.registerPlugin(ScrollToPlugin);




const contactRef = useRef(null);

  const scrollToContact = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: contactRef.current, offsetY: 70 }, // offset for navbar if needed
      ease: "power2.inOut",
    });
  };


// scrollheading
useEffect(() => {
  if (loading) return;
    const lines = gsap.utils.toArray(".scroll-heading");

    lines.forEach((line, i) => {
      gsap.fromTo(
        line,
        { color: "#888" }, // start grey
        {
          color: "#fff", // turn white
          scrollTrigger: {
            trigger: line,
            // start: "center center", // when line center hits screen center
            start: "center center", // when line center hits screen center
            // end: "+=50", // small scroll distance
            end: "+=40",
            // end: "top",

            scrub: true,
            onLeave: () => gsap.to(line, { color: "#888" }), // turn back grey
            onEnterBack: () => gsap.to(line, { color: "#fff" }), // if scrolling back up
            // markers: true, // debug
          },
        }
      );
    });
  }, [loading]);




// skills logo reaveal 
useEffect(() => {
  if (loading) return;

  const sections = document.querySelectorAll(".logo-section");

  sections.forEach((section) => {
    const effect = section.getAttribute("data-effect");
    const logos = section.querySelectorAll("img");

    // ----- Initial states for each effect -----
    const initialStates = {
      "slide-up": { opacity: 0, y: 30 },
      "zoom-in": { opacity: 0, scale: 0.5 },
      "flip": { opacity: 0, rotationY: 90, transformOrigin: "center" },
      "rotate-in": { opacity: 0, rotation: -90, transformOrigin: "center" },
      "wave": { opacity: 0, y: 20, scale: 0.8 },
      "elastic-pop": { opacity: 0, scale: 0, transformOrigin: "center" },
      "color-flash": { opacity: 0, filter: "grayscale(100%)" },
      "zigzag": { opacity: 0, x: (i) => (i % 2 === 0 ? -50 : 50) }
    };

    gsap.set(logos, initialStates[effect] || { opacity: 0, y: 30 });

    // ----- Animation configs -----
    const animations = {
      "slide-up": { opacity: 1, y: 0, stagger: 0.15, ease: "power2.out" },
      "zoom-in": { opacity: 1, scale: 1, stagger: 0.15, ease: "back.out(1.7)" },
      "flip": { opacity: 1, rotationY: 0, stagger: 0.15, ease: "power2.out" },
      "rotate-in": { opacity: 1, rotation: 0, stagger: 0.15, ease: "back.out(1.7)" },
      "wave": { opacity: 1, y: 0, scale: 1, stagger: 0.1, ease: "sine.out" },
      "elastic-pop": { opacity: 1, scale: 1, stagger: 0.1, ease: "elastic.out(1, 0.5)" },
      "color-flash": { opacity: 1, filter: "grayscale(0%)", stagger: 0.15, ease: "power1.out" },
      "zigzag": { opacity: 1, x: 0, stagger: 0.1, ease: "power2.out" }
    };

    // ----- ScrollTrigger -----
    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      onEnter: () => {
        gsap.to(logos, { duration: 0.8, ...animations[effect] });
      },
      onLeaveBack: () => {
        gsap.set(logos, initialStates[effect] || { opacity: 0, y: 30 });
      }
    });
  });

  return () => ScrollTrigger.getAll().forEach((st) => st.kill());
}, [loading]);


// // word highlighter
// useEffect(() => {
//   if(loading) return;
//     const strongWord = document.querySelector(".highlight-word");

//     gsap.to(strongWord, {
//       "--fill": "100%",
//       ease: "none",
//       scrollTrigger: {
//         trigger: strongWord,
//         start: "top 80%",
//         end: "top 20%",
//         scrub: true,
//       },
//     });
//   }, [loading]);

useEffect(() => {
  if (loading) return;

  const strongWords = document.querySelectorAll(".highlight-word");

  strongWords.forEach((strongWord) => {
    gsap.to(strongWord, {
      "--fill": "100%",
      ease: "none",
      scrollTrigger: {
        trigger: strongWord,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });
  });
}, [loading]);








 const textRef = useRef(null);
 
 useEffect(() => {
   if(loading)return;
   const width = textRef.current.scrollWidth - window.innerWidth;

    gsap.to(textRef.current, {
      x: -width, // move left
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom", // when text enters viewport
        end: "+=1000",       // scroll distance, adjust as needed
        scrub: true,         // ties animation to scroll
        // markers: true,    // enable to debug
      },
    });
  }, [loading]);


  const textRef2 = useRef(null);

 useEffect(() => {
   if(loading)return;
   const width = textRef2.current.scrollWidth - window.innerWidth;

    gsap.to(textRef2.current, {
      x: -width, // move left
      ease: "none",
      scrollTrigger: {
        trigger: textRef2.current,
        start: "top bottom", // when text enters viewport
        end: "+=1000",       // scroll distance, adjust as needed
        scrub: true,         // ties animation to scroll
        // markers: true,    // enable to debug
      },
    });
  }, [loading]);

// useEffect(() => {
//   if (loading) return;

//   const el = textRef2.current;
//   const textWidth = el.scrollWidth;

//   gsap.to([el, el.nextElementSibling], {
//     x: `+=${textWidth}`, // move left by width
//     ease: "none",
//     scrollTrigger: {
//       trigger: el,
//       start: "top bottom",
//       end: "+=2000",   // distance of scroll effect
//       scrub: true,
//     },
//     modifiers: {
//       x: (x) => `${parseFloat(x) % textWidth}px` // wraps seamlessly
//     }
//   });
// }, [loading]);




//  useEffect(() => {
//    if(loading)return;
//    const textWidth = textRef2.current.scrollWidth - window.innerWidth;

//     gsap.to(textRef2.current, {
//       x: '+=100%', // move left
//       ease: "none",
//       scrollTrigger: {
//         trigger: textRef2.current,
//         start: "top bottom", // when text enters viewport
//         end: "+=1000",       // scroll distance, adjust as needed
//         scrub: true,         // ties animation to scroll
//         // markers: true,    // enable to debug
//         // repeat:'-1'
//       },
//        modifiers: {
//     x: (x) => `${parseFloat(x) % textWidth}px`
//   }
//     });
//   }, [loading]);



// useEffect(() => {
//   if(loading)return;
//   const highlights = gsap.utils.toArray(".scroll-highlight");

//   highlights.forEach((el) => {
//     gsap.to(el, {
//       backgroundImage: "linear-gradient(to right, cyan 100%, white 0%)",
//       backgroundSize: "200% 100%",
//       backgroundPosition: "right bottom",
//       ease: "none",
//       scrollTrigger: {
//         trigger: el,
//         start: "top center",
//         end: "bottom center",
//         scrub: true,
//         onUpdate: (self) => {
//           const progress = self.progress * 100;
//           el.style.backgroundImage = `linear-gradient(to right, cyan ${progress}%, white ${progress}%)`;
//           el.style.webkitBackgroundClip = "text";
//           el.style.webkitTextFillColor = "transparent";
//         }
//       }
//     });
//   });
// }, [loading]);




// useEffect(() => {
//   const highlights = gsap.utils.toArray(".scroll-highlight");

//   highlights.forEach((el) => {
//     ScrollTrigger.create({
//       trigger: el,
//       start: "top center",
//       end: "bottom center",
//       scrub: true,
//       onUpdate: (self) => {
//         const progress = self.progress * 100;
//         el.style.backgroundImage = `linear-gradient(to right, cyan ${progress}%, white ${progress}%)`;
//         el.style.webkitBackgroundClip = "text";
//         el.style.webkitTextFillColor = "transparent";
//       }
//     });
//   });

//   // ✅ refresh after projects section is pinned
//   ScrollTrigger.refresh();
// }, []);




// working one below


// const sectionRef = useRef(null);



//  const PROJECTS = [
//     "https://i.pinimg.com/originals/53/44/9f/53449fa87702af80374c45b87080c639.jpg",
//     "https://i.pinimg.com/originals/53/44/9f/53449fa87702af80374c45b87080c639.jpg",
//     "https://i.pinimg.com/originals/53/44/9f/53449fa87702af80374c45b87080c639.jpg",
//     "https://i.pinimg.com/originals/53/44/9f/53449fa87702af80374c45b87080c639.jpg",
//   ];

//   const isDesktop = window.innerWidth > 768;
// // projects scroll 
//   useEffect(() => {
// if(loading)return;
//       if (isDesktop) {
//         setupHorizontalScroll();
//       } else {
//         const wrapper = sectionRef.current.querySelector(".project-wrapper");
//         wrapper.style.overflowX = "auto";
//         wrapper.style.scrollSnapType = "x mandatory";
//       }
    
//     // return () => clearTimeout(timeout);
//   }, [loading]);

// const setupHorizontalScroll = () => {
//   const wrapper = sectionRef.current.querySelector(".project-wrapper");
//   const textBlock = sectionRef.current.querySelector(".project-text");

//   const elementWidth = wrapper.scrollWidth;
//   wrapper.style.width = `${elementWidth}px`;

//   const width = window.innerWidth - elementWidth;
//   const duration = `${(elementWidth / window.innerHeight) * 100}%`;
// // const duration = elementWidth - window.innerWidth; // horizontal distance in px

//   const tl = gsap.timeline({ defaults: { ease: "none" } });
//   tl.to(wrapper, { x: width });

//   // Horizontal pin for images
//   ScrollTrigger.create({
//     trigger: wrapper,
//     start: "bottom bottom",
//     // end: duration,
//     end: `+=${duration}`,
//     scrub: 0,
//     pin: true,
//     pinSpacing: "margin",
//     animation: tl,
//     invalidateOnRefresh: true,
//     markers:'true'
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
//   gsap.fromTo(
//     textBlock,
//     { opacity: 0, y: 30 },
//     {
//       opacity: 1,
//       y: 0,
//       ease: "power1.out",
//       scrollTrigger: {
//         trigger: textBlock,
//         start: "top 80%",
//         end: "top 60%",
//         scrub: true,
//       },
//     }
//   );

//   // Fade in each image as it comes into view horizontally
//   gsap.utils.toArray(".project-card").forEach((card) => {
//     gsap.fromTo(
//       card,
//       { opacity: 0.2, scale: 0.95 },
//       {
//         opacity: 1,
//         scale: 1,
//         scrollTrigger: {
//           trigger: card,
//           containerAnimation: tl, // link fade to horizontal scroll
//           start: "left center",
//           end: "right center",
//           scrub: true,
//         },
//       }
//     );  
//   });


//   gsap.utils.toArray(".scroll-fade").forEach((el) => {
//   gsap.fromTo(
//     el,
//     { opacity: 0, y: 15 },
//     {
//       opacity: 1,
//       y: 0,
//       scrollTrigger: {
//         trigger: el,
//         start: "top 90%",
//         end: "top 60%",
//         scrub: true,
//         invalidateOnRefresh: true, // recalc positions after pin
//       },
//     }
//   );
// });

// };

const heroscRef=useRef(null)
  const scrollToSection = (ref) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: ref.current, offsetY: 70 }, // offset = navbar height if fixed
      ease: "power2.inOut",
    });
  };




 const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9c31sku",    // from EmailJS dashboard
        "template_0r0nx2l",   // template you set up
        form.current,
        "tS5eS0D7fQfDWlnhR"     // API key
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Message Failed, please try again!");
        }
      );
  };




  const projectsRef = useRef(null)
  const homeRef = useRef(null)
  const skillsRef = useRef(null)





if (loading) return(<div className="loadingimg">
<img className="" src={loadingimg}/>
</div>);


  return (<>
    <Navbar scrollToSection={scrollToSection} refs={{contactRef,skillsRef,projectsRef,homeRef}}/>
    <div style={{ fontFamily: "Arial, sans-serif", background: "#111", color: "#fff", margin: 0 }} >
      {/* Top Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "4px",
          background: "#00ffff",
          width: `${scrollProgress}%`,
          zIndex: 9999,
          transition: "width 0.2s ease-out",
        }}
      ></div>
      <div className="herosec" ref={heroscRef} >

      {/* Hero Section */}
      <section
        ref={heroRef}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // alignItems: "left",
          background: "#0f0f0f",
          textAlign: "left",
          padding: "0 20px",
          marginLeft:'3vw'
        }}
      >
          <div className="greeting" style={{textAlign:'left', color:'#00ffff'}} ref={homeRef}>Hi, My name is</div>
          {/* <h1 style={{ fontSize: "3rem", color: "#fff",marginTop:'0vh', marginBottom:'0vh' }}>Barinder Singh</h1> */}

 {/* Name with per-letter hover effect */}
        <h1 className="name" style={{ fontSize: "3rem", marginTop: 0, marginBottom: 0 }}>
          {Array.from("Barinder Singh").map((char, i) => (
            <span
            key={i}
            ref={(el) => (letterRefs.current[i] = el)}
            onMouseEnter={() => handleHoverIn(i)}
            onMouseLeave={() => handleHoverOut(i)}
            style={{
              display: "inline-block",
              cursor: "pointer",
                color: "#fff",
                marginRight: char === " " ? "8px" : "0px",
              }}
            >
              {char}
            </span>
          ))}
        </h1>




        <h1 className="tgl" >
          {/* Hey, I'm{" "} */}
          <span className="tagline" style={{ color: "#a8a8a8ff", fontWeight:'lighter' }}>
            <Typewriter
              words={["Im a Mern Stack developer", "I build things for the web", "I create asthetic and modern apps"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={70}
              delaySpeed={1500}
              />
          </span>
        </h1>

        <div className="button " >
          {/* <FaGithub /> */}
          {/* <a href="www.google.com"> */}
          {/* <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> */}

          <FiGithub onClick={() => window.open("https://github.com/bsingh-1997", "_blank")}
   style={{cursor:"pointer"}} className="btns" size={30}/>
  {/* </a> */}
          <FiLinkedin onClick={() => window.open("https://www.linkedin.com/in/barinder-singh-99a179203/", "_blank")} className="btns" size={30} />
          <FaInstagram size={30}   className="btns" />
          <CiMail size={30} className="btns"   onClick={() => window.location.href = "mailto:barindersingh1997@gmail.com"}/>
        </div>
        <button  className="button lets-talk-btn" onClick={scrollToContact}>Let's talk</button>
        <p className="int2"
          style={{
            marginTop: "1rem",
            fontSize: "1.2rem",
            // width:'200px',
            maxWidth: "500px",
            color: "#ccc",
          }}
          >
          I build modern web experiences using React, Node.js, and GSAP animations.
        </p>
      </section>
          <img ref={imageRef} className="heroimgg" src="https://bsingh-1997.github.io/portfolio/static/media/code.b705d32595c81c5c92d9.png"/>
          </div>


   
{/* heading */}
<div class="scroll-heading-wrapper scroll-fade" style={{width:'70%',margin:'70vh auto'}}>
  <h1 class="scroll-heading" style={{fontSize:'2rem'}}>Transforming complex ideas into modern world applications and </h1>
  <h1 class="scroll-heading" style={{fontSize:'2rem'}}>interactive realities for the modern web. and much more</h1>
</div>





   {/* skillz Section */}
      <div style={{ marginTop:'100vh',marginLeft:'3vw', display:'flex', alignItems:'left', justifyContent:'center' , flexDirection:'column'}} >
        <p className="scroll-fade" style={{ fontSize:'1em',margin:'0'}}>Skills</p>     
        <h1 className="scroll-fade" style={{color:'cyan', fontSize:'3em', marginTop:'0'}} ref={skillsRef}>My Skills</h1>     
        <div>
        <p className="scroll-fade" >I like to take responsiblity to craft asthetic user experience using modern frontend architecture. </p>
       </div>
      <h3 className="scroll-fade ">Languages and Tools</h3>
          <div className="logo-section scroll-fade" data-effect='wave' style={{display:'flex', gap:'2vw', marginBottom:'5vh'}}>
          {/* <div ref={wrapperRef} className="logos-wrapper" style={{display:'flex', gap:'2vw', marginBottom:'5vh'}}> */}
            {/* <img style={{width:'20vw'}} src="https://icon-library.com/images/html5-icon-png/html5-icon-png-1.jpg"/> */}
            <img className="tech-logo"  src={html}/>
            <img className="tech-logo"  src={css}/>
            <img className="tech-logo" style={{ margin:'0 -3vw'}} src={js}/>
            <img className="tech-logo"  src={vite}/>
            <img className="tech-logo"  src={vsc}/>
            <img className="tech-logo"  src={pm}/>
            <img className="tech-logo"  src={python}/>
            
            </div>
      <h3 className="scroll-fade ">Libraries and Frameworks</h3>
      <div   className="logo-section scroll-fade" data-effect="zigzag" style={{display:'flex', gap:'2vw',marginBottom:'5vh'}}>

            <img className="tech-logo2"  src={react}/>
            <img className="tech-logo2"  src={node}/>
            <img className="tech-logo2"  src={redux}/>
            <img className="tech-logo2"  src={bs}/>
            <img className="tech-logo2"  src={gsaplogo}/>
            <img  className="tech-logo2"  src={ex}/>
      </div>
      {/* </div> */}
      <h3 className="scroll-fade ">Databases and others</h3>
      <div  className="logo-section scroll-fade " data-effect="rotate-in" style={{display:'flex', gap:'2vw' , marginBottom:'5vh'}}>
      {/* <div className="scroll-fade" style={{display:'flex', gap:'2vw' , marginBottom:'5vh'}}> */}
            <img className="tech-logo3" src={mysql}/>
            <img className="tech-logo3" src={mdb}/>
            <img className="tech-logo3" src={git}/>
            <img className="tech-logo3" src={thunder}/>
            <img className="tech-logo3" src={pm}/>
            <img className="tech-logo3" src={verc}/>
      
      </div>
      </div>
   {/*Section */}



{/* obession to detail */}
<div style={{margin:'70vh auto', width:'70%', textAlign:'center', justifyContent:'center', }} >
  
   <h1 className="scroll-fade" style={{ fontSize: "2.3rem", }}>
        I have a{" "}
        <span
          className="highlight-word"
          style={{
            "--fill": "0%",
            background: `linear-gradient(to right, cyan var(--fill), white var(--fill))`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          >
          strong
        </span>{" "}
        obsession for attention to detail.
      </h1>
    </div>



{/* 
wworking project section 
<div>


<section ref={sectionRef} className="projects-section">
  <div className="project-text">
    <h1  style={{ fontSize: '1em', margin: '0' }}>Projects</h1>
    <h1  style={{ color: 'cyan', fontSize: '3em', marginTop: '0' }}>My Projects</h1>
    <h3 >
      Some things I've built with love, expertise, and a pinch of magical ingredients.
    </h3>
  </div>

  <div className="horizontal-scroll">
    <div className="project-wrapper">
      {PROJECTS.map((src, idx) => (
        <div className="project-card" key={idx}>
          <img src={src} alt={`Project ${idx + 1}`} />
        </div>
      ))}
    </div>
  </div>
</section>

</div>  */}

   {/* About Section */}

{/* <Projects loading={loading}/> */}




{/* projects */}
 <div  style={{marginLeft:'3vw'}}>
    <h1 className="scroll-fade" style={{ fontSize: '1em', margin: '0' }} ref={projectsRef}>Projects</h1>
    <h1  className="scroll-fade" style={{ color: 'cyan', fontSize: '3em', marginTop: '0' }}>My Projects</h1>
    <h3 className="scroll-fade" >
      Some things I've built recently with love, expertise, and a pinch of magical ingredients.
    </h3>
    <div  >
    <div className="scroll-fade pcont" >

        <a href="https://bs-customs-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>

      <div className="project-card" >
        <div style={{marginLeft:'1vw', display:"flex", flexDirection:"column",gap:'2vh'}}>
          <h1 style={{color:""}}>E-store</h1>
          <div style={{display:'flex', gap:'.5vw'}}>
        {/* <img style={{height:'5vh'}} src={}/> */}
        {/* <img style={{height:'5vh'}} src={node}/> */}
        {/* <img style={{height:'5vh', }} src={react}/> */}
        <img style={{height:'1vh', }} src={mdb}/>
        <img style={{height:'5vh', }} src={react}/>
          </div>
          <div style={{display:'flex', gap:'.5vw'}}>
        <img style={{height:'5vh'}} src={node}/>
        <img style={{height:'5vh'}} src={git}/>
        <img style={{height:'5vh', }} src={verc}/>
        {/* <img style={{height:'5vh', }} src={react}/> */}
          </div>
        <img style={{height:'7vh', }} src={ex}/>

        {/* <h3>A blog app bnjfebebfhb bhefhbhe bhefbb euhuh </h3> */}
        </div>
   <div style={{width:'50%',background:'', display:'flex', justifyContent:'center'}}>
        <img  className='pimg' src={bscustom}/>
        </div>

      </div>
        </a>
      
      <a href="https://blogbrew-frontend.vercel.app/allblogs" style={{textDecoration:'none'}}>
      <div className="project-card">
        <div style={{marginLeft:'1vw', display:"flex", flexDirection:"column",gap:'2vh'}}>
          <h1>BlogBrew</h1>
          <div style={{display:'flex', gap:'.5vw'}}>
        {/* <img style={{height:'5vh'}} src={}/> */}
        {/* <img style={{height:'5vh'}} src={node}/> */}
        {/* <img style={{height:'5vh', }} src={react}/> */}
        <img style={{height:'5vh', }} src={mdb}/>
        <img style={{height:'5vh', }} src={react}/>
          </div>
          <div style={{display:'flex', gap:'.5vw'}}>
        <img style={{height:'5vh'}} src={node}/>
        <img style={{height:'5vh'}} src={git}/>
        <img style={{height:'5vh', }} src={verc}/>
        {/* <img style={{height:'5vh', }} src={react}/> */}
          </div>
        <img style={{height:'7vh', }} src={ex}/>

        {/* <h3>A blog app bnjfebebfhb bhefhbhe bhefbb euhuh </h3> */}
        </div>
        <div style={{width:'50%',background:'', display:'flex', justifyContent:'center'}}>
        <img  className='pimg' src={blogbrew}/>
        </div>
      </div>
      </a>
      {/* <div style={{backgroundColor:"blue", height:'40vh',width:'35vw'}}></div>
      <div style={{backgroundColor:"blue", height:'40vh',width:'35vw'}}></div>
      <div style={{backgroundColor:"red", height:'40vh',width:'35vw'}}></div> */}
    </div>
    </div>
  </div>









  {/* collabration */}

<div style={{margin:'70vh 0', textAlign:'center', justifyContent:'center', }} >
 
 <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <h1
        ref={textRef}
        style={{ display: "inline-block", fontSize: "3rem", padding: "0 20px", color:'darkgray', opacity:'20%' }}
      >
        React NodeJs MongoDb ExpressJs Mern stack Git Github Vercel
        React NodeJs MongoDb ExpressJs Mern stack Git Github Vercel
        
      </h1>
    </div>
  

   <h1 className="scroll-fade" style={{ fontSize: "3rem", width:'70%',margin:'auto' }}>
        Intrested in{" "}
        <span
          className="highlight-word"
          style={{
            "--fill": "0%",
            background: `linear-gradient(to right, cyan var(--fill), white var(--fill))`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          >
          collabration?
        </span>{" "}
          </h1>

        <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <h1
        ref={textRef2}
        style={{ display: "inline-block", fontSize: "3rem", padding: "0 20px" , color:'darkgray' , opacity:'20%'}}
      >
        Payment Gateway Integration Animations Performance Jwt Security 
        Payment Gateway Integration Animations Performance Jwt Security 
        Payment Gateway Integration Animations Performance Jwt Security 
      </h1>
      <h1
      
        style={{ display: "inline-block", fontSize: "3rem", padding: "0 20px" }}
      >
        This text scrolls horizontally as you scroll down the page!
        This text scrolls horizontally as you scroll down the page!
        This text scrolls horizontally as you scroll down the page!
      </h1>
    </div> 
        



    </div>



<div style={{marginLeft:'3vw'}}>


 <h1 className="scroll-fade" ref={contactRef} style={{ fontSize: '1em', margin: '0' }}>Contact</h1>
    <h1  className="scroll-fade" style={{ color: 'cyan', fontSize: '3em', margin: '0' }}>Contact</h1>
 <h1 className="scroll-fade" style={{ fontSize: '1em', margin: '' }}>Get in touch</h1>

{/* 
  <p>Contact</p>
  <h1 className="scroll-fade">Contact</h1>
  <p>Get in Touch</p> */}
  <div className="scroll-fade" style={{display:"flex",justifyContent:'center'}}>
    

{/* contactform */}
<form ref={form} onSubmit={sendEmail} className="emailform">
      <input style={{border:'2px solid cyan', height:'7vh', paddingLeft:'1vw',background:'black', borderRadius:'10px',color:'white'}} type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required style={{border:'2px solid cyan', height:'7vh', paddingLeft:'1vw',background:'black', borderRadius:'10px'}} />
      <textarea name="message"  style={{border:'2px solid cyan', height:'20vh', paddingLeft:'1vw',background:'black', borderRadius:'10px',color:'white'}}  placeholder="Your Message" required />
      <button style={{border:'2px solid cyan', height:'7vh', padding:'', borderRadius:'10px',background:'black',color:'white'}} type="submit">Send</button>
    </form>
  </div>
  <section
 
>


  <div className="resume" >

  <h1>Download My Resume</h1>
  <a
    href="/BsResume3.pdf"   // place resume.pdf inside public/ folder
    download="BsResume3.pdf"
    className="lets-talk-btn resumebtn"
    
    >
    Download Resume
  </a>
    </div>
</section>




</div>



{/* <EarthGlobe/> */}
{/* <RotatingEarth/> */}


      {/* Footer */}
      <footer
        style={{
          padding: "40px 20px",
          background: 'rgb(17, 17, 17)',
          textAlign: "center",
          fontSize: "1rem",
          color: "#777",
        }}
        >
        © {new Date().getFullYear()} Barinder Singh. Built with React & GSAP.
      </footer>
        
    </div>
  </>
  );
};



export default App;

