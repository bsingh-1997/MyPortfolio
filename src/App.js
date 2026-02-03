

// // src/App.js
// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { Typewriter } from "react-simple-typewriter";
// import "./App.css"
// import { FaGithub } from "react-icons/fa";
// import { FiGithub } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa";
// import { FiLinkedin } from "react-icons/fi";
// import { CiMail } from "react-icons/ci";
// import HorizontalScroll from "./HorizontalScroll";
// import Navbar from "./Navbar";
// import './App.css'
// import html from './logos/html.png'
// import css from './logos/css.png'
// import js from './logos/js.png'
// import node from './logos/node.png'
// import vite from './logos/vite.svg'
// import vsc from './logos/vsc.png'
// import redux from './logos/redux.svg'
// import python from './logos/python.png'
// import pm from './logos/postman-ic.png'
// import git from './logos/git.svg'
// import verc from './logos/logov.png'
// import bs from './logos/bootstrap.png'
// import ex from './logos/ExpressJS.png'
// import gsaplogo from './logos/gsap.png'
// import mysql from './logos/mysql.svg'
// import thunder from './logos/thunder-icon.png'
// import react from './logos/react.svg'
// import mdb from './logos/mongodb.svg'
// import Projects from "./Projects";
// import emailjs from 'emailjs-com'
// import loadingimg from './loadingg.gif'
// import RotatingEarth from "./RotatingEarth";
// import EarthGlobe from "./Earth";
// import blogbrew from './blogbrew2.png'
// import bscustom from './bscustom.png'
// import { RxVercelLogo } from "react-icons/rx";
// // import thunder from './logos/.svg'
// gsap.registerPlugin(ScrollTrigger);

// const App = () => {
  
//   const heroRef = useRef(null);
//   const sectionRefs = useRef([]);
//   const projectRefs = useRef([]);
//   const [scrollProgress, setScrollProgress] = useState(0);

//    const letterRefs = useRef([]);

//   // Bouncy letter hover in
//   const handleHoverIn = (index) => {
//     gsap.to(letterRefs.current[index], {
//       y: -3,
//       // scale: 1.3,
//       scale: 1,
//       color: "#00ffff",
//       duration: 0.3,
//       // ease: "bounce.out",
//       ease: "elastic.out(1, 0.3)"

//     });
//   };

//   // Letter hover out
//   const handleHoverOut = (index) => {
//     gsap.to(letterRefs.current[index], {
//       y: 0,
//       scale: 1,
//       color: "#fff",
//       duration: 0.3,
//       ease: "power1.out",
//       // ease: "elastic1.out",
//     });
//   };



//       const [loading, setLoading] = useState(true);
// // loadedr timeout
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000); // 2.5s
//     return () => clearTimeout(timer);
//   }, []);





//   // Scroll progress bar logic
//   useEffect(() => { 
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.body.scrollHeight - window.innerHeight;
//       const progress = (scrollTop / docHeight) * 100;
//       setScrollProgress(progress);
//     };
//     window.addEventListener("scroll", handleScroll);


    

//     // Hero section animation
//     gsap.from(heroRef.current, {
//       opacity: 1,
//       y: 50,
//       duration: 1.5,
//       ease: "power3.out",
//     });

//     // Section animations
//     sectionRefs.current.forEach((section) => {
//       gsap.from(section, {
//         scrollTrigger: {
//           trigger: section,
//           start: "top 90%",
//           // start: "top 80%",
//           toggleActions: "play none none reverse",
//         },
//         opacity: 1,
//         y: 50,
//         duration: 1.2,
//         ease: "power2.out",
//       });
//     });

//     // Project card animations (one by one)
//     projectRefs.current.forEach((card, index) => {
//       gsap.from(card, {
//         scrollTrigger: {
//           trigger: card,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//         opacity: 1,
//         y: 60,
//         duration: 0.8,
//         delay: index * 0.2,
//         ease: "power2.out",
//       });
//     });

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

  
// // image animation
// const imageRef = useRef(null)
//    useEffect(() => {
//     if (loading)return;
//     gsap.to(imageRef.current, {
//       y: -10,           // move 10px up
//       duration: 1.5,      // 2 seconds per movement
//       // ease: "easeInOut",// smooth easing
//       ease: "none",// smooth easing
//       yoyo: true,       // go back down
//       repeat: -1        // loop forever
//     });
//   }, [loading]);



// // hero timing animations
// useEffect(() => {
//   if (loading) return;
//   const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power1.out" } });

//   tl.fromTo(".greeting", { opacity: 0 }, { opacity: 1 })
//     .fromTo(".name", { opacity: 0 }, { opacity: 1 })
//     .fromTo(".tagline", { opacity: 0 }, { opacity: 1 })
    
//     .fromTo(".button", { opacity: 0 }, { opacity: 1 },)
//     .fromTo(".int2", { opacity: 0 }, { opacity: 1 },);

//   return () => tl.kill();
// }, [loading]);
// // }, []);



// // scroll fading 
// useEffect(() => {
//   if (loading) return; // don't start until loader is gone

//   // ensure plugin registered (safe to call again)
//   gsap.registerPlugin(ScrollTrigger);

//   const els = gsap.utils.toArray(".scroll-fade");
//   els.forEach((el) => {
//     // make sure starting state is consistent
//     gsap.set(el, { opacity: 0, y: 15 });

//     // one timeline per element that maps to a scroll range
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: el,
//         start: "top 94%",   // when element top is near bottom of viewport -> start
//         end: "top -30%",     // when element top reaches about middle -> mid/end of timeline
//         scrub: true,        // tie animation progress to scroll
//         invalidateOnRefresh: true,
//         // markers: true,   // enable while debugging to see trigger positions
//       },
//     });

//     // first half of timeline => fade in & settle
//     tl.to(el, { opacity: 1, y: 0, duration: 1 });

//     // second half => fade out while moving up
//     tl.to(el, { opacity: 0, y: -5, duration: 1 });
//   });


//   // force a refresh so start/end and positions are correct
//   ScrollTrigger.refresh();

//   // cleanup on unmount
//   return () => {
//     ScrollTrigger.getAll().forEach((st) => st.kill());
//   };
// }, [loading]); // run when loader ends


// // contactscroll
// gsap.registerPlugin(ScrollToPlugin);




// const contactRef = useRef(null);

//   const scrollToContact = () => {
//     gsap.to(window, {
//       duration: 1,
//       scrollTo: { y: contactRef.current, offsetY: 70 }, // offset for navbar if needed
//       ease: "power2.inOut",
//     });
//   };


// // scrollheading
// useEffect(() => {
//   if (loading) return;
//     const lines = gsap.utils.toArray(".scroll-heading");

//     lines.forEach((line, i) => {
//       gsap.fromTo(
//         line,
//         { color: "#888" }, // start grey
//         {
//           color: "#fff", // turn white
//           scrollTrigger: {
//             trigger: line,
//             // start: "center center", // when line center hits screen center
//             start: "center center", // when line center hits screen center
//             // end: "+=50", // small scroll distance
//             end: "+=40",
//             // end: "top",

//             scrub: true,
//             onLeave: () => gsap.to(line, { color: "#888" }), // turn back grey
//             onEnterBack: () => gsap.to(line, { color: "#fff" }), // if scrolling back up
//             // markers: true, // debug
//           },
//         }
//       );
//     });
//   }, [loading]);




// // skills logo reaveal 
// useEffect(() => {
//   if (loading) return;

//   const sections = document.querySelectorAll(".logo-section");

//   sections.forEach((section) => {
//     const effect = section.getAttribute("data-effect");
//     const logos = section.querySelectorAll("img");

//     // ----- Initial states for each effect -----
//     const initialStates = {
//       "slide-up": { opacity: 0, y: 30 },
//       "zoom-in": { opacity: 0, scale: 0.5 },
//       "flip": { opacity: 0, rotationY: 90, transformOrigin: "center" },
//       "rotate-in": { opacity: 0, rotation: -90, transformOrigin: "center" },
//       "wave": { opacity: 0, y: 20, scale: 0.8 },
//       "elastic-pop": { opacity: 0, scale: 0, transformOrigin: "center" },
//       "color-flash": { opacity: 0, filter: "grayscale(100%)" },
//       "zigzag": { opacity: 0, x: (i) => (i % 2 === 0 ? -50 : 50) }
//     };

//     gsap.set(logos, initialStates[effect] || { opacity: 0, y: 30 });

//     // ----- Animation configs -----
//     const animations = {
//       "slide-up": { opacity: 1, y: 0, stagger: 0.15, ease: "power2.out" },
//       "zoom-in": { opacity: 1, scale: 1, stagger: 0.15, ease: "back.out(1.7)" },
//       "flip": { opacity: 1, rotationY: 0, stagger: 0.15, ease: "power2.out" },
//       "rotate-in": { opacity: 1, rotation: 0, stagger: 0.15, ease: "back.out(1.7)" },
//       "wave": { opacity: 1, y: 0, scale: 1, stagger: 0.1, ease: "sine.out" },
//       "elastic-pop": { opacity: 1, scale: 1, stagger: 0.1, ease: "elastic.out(1, 0.5)" },
//       "color-flash": { opacity: 1, filter: "grayscale(0%)", stagger: 0.15, ease: "power1.out" },
//       "zigzag": { opacity: 1, x: 0, stagger: 0.1, ease: "power2.out" }
//     };

//     // ----- ScrollTrigger -----
//     ScrollTrigger.create({
//       trigger: section,
//       start: "top 80%",
//       onEnter: () => {
//         gsap.to(logos, { duration: 0.8, ...animations[effect] });
//       },
//       onLeaveBack: () => {
//         gsap.set(logos, initialStates[effect] || { opacity: 0, y: 30 });
//       }
//     });
//   });

//   return () => ScrollTrigger.getAll().forEach((st) => st.kill());
// }, [loading]);


// // // word highlighter
// // useEffect(() => {
// //   if(loading) return;
// //     const strongWord = document.querySelector(".highlight-word");

// //     gsap.to(strongWord, {
// //       "--fill": "100%",
// //       ease: "none",
// //       scrollTrigger: {
// //         trigger: strongWord,
// //         start: "top 80%",
// //         end: "top 20%",
// //         scrub: true,
// //       },
// //     });
// //   }, [loading]);

// useEffect(() => {
//   if (loading) return;

//   const strongWords = document.querySelectorAll(".highlight-word");

//   strongWords.forEach((strongWord) => {
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
//   });
// }, [loading]);








//  const textRef = useRef(null);
 
//  useEffect(() => {
//    if(loading)return;
//    const width = textRef.current.scrollWidth - window.innerWidth;

//     gsap.to(textRef.current, {
//       x: -width, // move left
//       ease: "none",
//       scrollTrigger: {
//         trigger: textRef.current,
//         start: "top bottom", // when text enters viewport
//         end: "+=1000",       // scroll distance, adjust as needed
//         scrub: true,         // ties animation to scroll
//         // markers: true,    // enable to debug
//       },
//     });
//   }, [loading]);


//   const textRef2 = useRef(null);

//  useEffect(() => {
//    if(loading)return;
//    const width = textRef2.current.scrollWidth - window.innerWidth;

//     gsap.to(textRef2.current, {
//       x: -width, // move left
//       ease: "none",
//       scrollTrigger: {
//         trigger: textRef2.current,
//         start: "top bottom", // when text enters viewport
//         end: "+=1000",       // scroll distance, adjust as needed
//         scrub: true,         // ties animation to scroll
//         // markers: true,    // enable to debug
//       },
//     });
//   }, [loading]);


// const heroscRef=useRef(null)
//   const scrollToSection = (ref) => {
//     gsap.to(window, {
//       duration: 1, 
//       scrollTo: { y: ref.current, offsetY: 70 }, // offset = navbar height if fixed
//       ease: "power2.inOut",
//     });
//   };




//  const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_9c31sku",    // from EmailJS dashboard
//         "template_0r0nx2l",   // template you set up
//         form.current,
//         "tS5eS0D7fQfDWlnhR"     // API key
//       )
//       .then(
//         (result) => {
//           console.log("Message sent:", result.text);
//           alert("Message Sent Successfully!");
//         },
//         (error) => {
//           console.log("Error:", error.text);
//           alert("Message Failed, please try again!");
//         }
//       );
//   };




//   const projectsRef = useRef(null)
//   const homeRef = useRef(null)
//   const skillsRef = useRef(null)





// if (loading) return(<div className="loadingimg">
// <img className="" src={loadingimg}/>
// </div>);


//   return (<>
//     <Navbar scrollToSection={scrollToSection} refs={{contactRef,skillsRef,projectsRef,homeRef}}/>
//     <div style={{ fontFamily: "Arial, sans-serif", background: "#111", color: "#fff", margin: 0 }} >
//       {/* Top Progress Bar */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           height: "4px",
//           background: "#00ffff",
//           width: `${scrollProgress}%`,
//           zIndex: 9999,
//           transition: "width 0.2s ease-out",
//         }}
//       ></div>
//       <div className="herosec" ref={heroscRef} >

//       {/* Hero Section */}
//       <section
//         ref={heroRef}
//         style={{
//           height: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           // alignItems: "left",
//           background: "#0f0f0f",
//           textAlign: "left",
//           padding: "0 20px",
//           marginLeft:'3vw'
//         }}
//       >
//           <div className="greeting" style={{textAlign:'left', color:'#00ffff'}} ref={homeRef}>Hi, My name is</div>
//           {/* <h1 style={{ fontSize: "3rem", color: "#fff",marginTop:'0vh', marginBottom:'0vh' }}>Barinder Singh</h1> */}

//  {/* Name with per-letter hover effect */}
//         <h1 className="name" style={{ fontSize: "3rem", marginTop: 0, marginBottom: 0 }}>
//           {Array.from("Barinder Singh").map((char, i) => (
//             <span
//             key={i}
//             ref={(el) => (letterRefs.current[i] = el)}
//             onMouseEnter={() => handleHoverIn(i)}
//             onMouseLeave={() => handleHoverOut(i)}
//             style={{
//               display: "inline-block",
//               cursor: "pointer",
//                 color: "#fff",
//                 marginRight: char === " " ? "8px" : "0px",
//               }}
//             >
//               {char}
//             </span>
//           ))}
//         </h1>




//         <h1 className="tgl" >
//           {/* Hey, I'm{" "} */}
//           <span className="tagline" style={{ color: "#a8a8a8ff", fontWeight:'lighter' }}>
//             <Typewriter
//               words={["Im a Mern Stack developer", "I build things for the web", "I create asthetic and modern apps"]}
//               loop
//               cursor
//               cursorStyle="|"
//               typeSpeed={80}
//               deleteSpeed={70}
//               delaySpeed={1500}
//               />
//           </span>
//         </h1>

//         <div className="button " >
//           {/* <FaGithub /> */}
//           {/* <a href="www.google.com"> */}
//           {/* <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"> */}

//           <FiGithub onClick={() => window.open("https://github.com/bsingh-1997", "_blank")}
//    style={{cursor:"pointer"}} className="btns" size={30}/>
//   {/* </a> */}
//           <FiLinkedin onClick={() => window.open("https://www.linkedin.com/in/barinder-singh-99a179203/", "_blank")} className="btns" size={30} />
//           <FaInstagram size={30}   className="btns" />
//           <CiMail size={30} className="btns"   onClick={() => window.location.href = "mailto:barindersingh1997@gmail.com"}/>
//         </div>
//         <button  className="button lets-talk-btn" onClick={scrollToContact}>Let's talk</button>
//         <p className="int2"
//           style={{
//             marginTop: "1rem",
//             fontSize: "1.2rem",
//             // width:'200px',
//             maxWidth: "500px",
//             color: "#ccc",
//           }}
//           >
//           I build modern web experiences using React, Node.js, and GSAP animations.
//         </p>
//       </section>
//           <img ref={imageRef} className="heroimgg" src="https://bsingh-1997.github.io/portfolio/static/media/code.b705d32595c81c5c92d9.png"/>
//           </div>


   
// {/* heading */}
// <div class="scroll-heading-wrapper scroll-fade" style={{width:'70%',margin:'70vh auto'}}>
//   <h1 class="scroll-heading" style={{fontSize:'2rem'}}>Transforming complex ideas into modern world applications and </h1>
//   <h1 class="scroll-heading" style={{fontSize:'2rem'}}>interactive realities for the modern web. and much more</h1>
// </div>





//    {/* skillz Section */}
//       <div style={{ marginTop:'100vh',marginLeft:'3vw', display:'flex', alignItems:'left', justifyContent:'center' , flexDirection:'column'}} >
//         <p className="scroll-fade" style={{ fontSize:'1em',margin:'0'}}>Skills</p>     
//         <h1 className="scroll-fade" style={{color:'cyan', fontSize:'3em', marginTop:'0'}} ref={skillsRef}>My Skills</h1>     
//         <div>
//         <p className="scroll-fade" >I like to take responsiblity to craft asthetic user experience using modern frontend architecture. </p>
//        </div>
//       <h3 className="scroll-fade ">Languages and Tools</h3>
//           <div className="logo-section scroll-fade" data-effect='wave' style={{display:'flex', gap:'2vw', marginBottom:'5vh'}}>
//           {/* <div ref={wrapperRef} className="logos-wrapper" style={{display:'flex', gap:'2vw', marginBottom:'5vh'}}> */}
//             {/* <img style={{width:'20vw'}} src="https://icon-library.com/images/html5-icon-png/html5-icon-png-1.jpg"/> */}
//             <img className="tech-logo"  src={html}/>
//             <img className="tech-logo"  src={css}/>
//             <img className="tech-logo" style={{ margin:'0 -3vw'}} src={js}/>
//             <img className="tech-logo"  src={vite}/>
//             <img className="tech-logo"  src={vsc}/>
//             <img className="tech-logo"  src={pm}/>
//             <img className="tech-logo"  src={python}/>
            
//             </div>
//       <h3 className="scroll-fade ">Libraries and Frameworks</h3>
//       <div   className="logo-section scroll-fade" data-effect="zigzag" style={{display:'flex', gap:'2vw',marginBottom:'5vh'}}>

//             <img className="tech-logo2"  src={react}/>
//             <img className="tech-logo2"  src={node}/>
//             <img className="tech-logo2"  src={redux}/>
//             <img className="tech-logo2"  src={bs}/>
//             <img className="tech-logo2"  src={gsaplogo}/>
//             <img  className="tech-logo2"  src={ex}/>
//       </div>
//       {/* </div> */}
//       <h3 className="scroll-fade ">Databases and others</h3>
//       <div  className="logo-section scroll-fade " data-effect="rotate-in" style={{display:'flex', gap:'2vw' , marginBottom:'5vh'}}>
//       {/* <div className="scroll-fade" style={{display:'flex', gap:'2vw' , marginBottom:'5vh'}}> */}
//             <img className="tech-logo3" src={mysql}/>
//             <img className="tech-logo3" src={mdb}/>
//             <img className="tech-logo3" src={git}/>
//             <img className="tech-logo3" src={thunder}/>
//             <img className="tech-logo3" src={pm}/>
//             <img className="tech-logo3" src={verc}/>
      
//       </div>
//       </div>
//    {/*Section */}



// {/* obession to detail */}
// <div style={{margin:'70vh auto', width:'70%', textAlign:'center', justifyContent:'center', }} >
  
//    <h1 className="scroll-fade" style={{ fontSize: "2.3rem", }}>
//         I have a{" "}
//         <span
//           className="highlight-word"
//           style={{
//             "--fill": "0%",
//             background: `linear-gradient(to right, cyan var(--fill), white var(--fill))`,
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//           >
//           strong
//         </span>{" "}
//         obsession for attention to detail.
//       </h1>
//     </div>




// {/* projects */}
//  <div  style={{marginLeft:'3vw'}}>
//     <h1 className="scroll-fade" style={{ fontSize: '1em', margin: '0' }} ref={projectsRef}>Projects</h1>
//     <h1  className="scroll-fade" style={{ color: 'cyan', fontSize: '3em', marginTop: '0' }}>My Projects</h1>
//     <h3 className="scroll-fade" >
//       Some things I've built recently with love, expertise, and a pinch of magical ingredients.
//     </h3>
//     <div  >
//     <div className="scroll-fade pcont" >

//         <a href="https://bs-customs-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>

//       <div className="project-card" >
//         <div style={{marginLeft:'1vw', display:"flex", flexDirection:"column",gap:'2vh'}}>
//           <h1 style={{color:""}}>E-store</h1>
//           <div style={{display:'flex', gap:'.5vw'}}>
//         {/* <img style={{height:'5vh'}} src={}/> */}
//         {/* <img style={{height:'5vh'}} src={node}/> */}
//         {/* <img style={{height:'5vh', }} src={react}/> */}
//         <img style={{height:'1vh', }} src={mdb}/>
//         <img style={{height:'5vh', }} src={react}/>
//           </div>
//           <div style={{display:'flex', gap:'.5vw'}}>
//         <img style={{height:'5vh'}} src={node}/>
//         <img style={{height:'5vh'}} src={git}/>
//         <img style={{height:'5vh', }} src={verc}/>
//         {/* <img style={{height:'5vh', }} src={react}/> */}
//           </div>
//         <img style={{height:'7vh', }} src={ex}/>

//         {/* <h3>A blog app bnjfebebfhb bhefhbhe bhefbb euhuh </h3> */}
//         </div>
//    <div style={{width:'50%',background:'', display:'flex', justifyContent:'center'}}>
//         <img  className='pimg' src={bscustom}/>
//         </div>

//       </div>
//         </a>
      
//       <a href="https://blogbrew-frontend.vercel.app/allblogs" style={{textDecoration:'none'}}>
//       <div className="project-card">
//         <div style={{marginLeft:'1vw', display:"flex", flexDirection:"column",gap:'2vh'}}>
//           <h1>BlogBrew</h1>
//           <div style={{display:'flex', gap:'.5vw'}}>
//         {/* <img style={{height:'5vh'}} src={}/> */}
//         {/* <img style={{height:'5vh'}} src={node}/> */}
//         {/* <img style={{height:'5vh', }} src={react}/> */}
//         <img style={{height:'5vh', }} src={mdb}/>
//         <img style={{height:'5vh', }} src={react}/>
//           </div>
//           <div style={{display:'flex', gap:'.5vw'}}>
//         <img style={{height:'5vh'}} src={node}/>
//         <img style={{height:'5vh'}} src={git}/>
//         <img style={{height:'5vh', }} src={verc}/>
//         {/* <img style={{height:'5vh', }} src={react}/> */}
//           </div>
//         <img style={{height:'7vh', }} src={ex}/>

//         {/* <h3>A blog app bnjfebebfhb bhefhbhe bhefbb euhuh </h3> */}
//         </div>
//         <div style={{width:'50%',background:'', display:'flex', justifyContent:'center'}}>
//         <img  className='pimg' src={blogbrew}/>
//         </div>
//       </div>
//       </a>
//       {/* <div style={{backgroundColor:"blue", height:'40vh',width:'35vw'}}></div>
//       <div style={{backgroundColor:"blue", height:'40vh',width:'35vw'}}></div>
//       <div style={{backgroundColor:"red", height:'40vh',width:'35vw'}}></div> */}
//     </div>
//     </div>
//   </div>









//   {/* collabration */}

// <div style={{margin:'70vh 0', textAlign:'center', justifyContent:'center', }} >
 
//  <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
//       <h1
//         ref={textRef}
//         style={{ display: "inline-block", fontSize: "3rem", padding: "0 20px", color:'darkgray', opacity:'20%' }}
//       >
//         React NodeJs MongoDb ExpressJs Mern stack Git Github Vercel
//         React NodeJs MongoDb ExpressJs Mern stack Git Github Vercel
        
//       </h1>
//     </div>
  

//    <h1 className="scroll-fade" style={{ fontSize: "3rem", width:'70%',margin:'auto' }}>
//         Intrested in{" "}
//         <span
//           className="highlight-word"
//           style={{
//             "--fill": "0%",
//             background: `linear-gradient(to right, cyan var(--fill), white var(--fill))`,
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//           >
//           collabration?
//         </span>{" "}
//           </h1>

//         <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
//       <h1
//         ref={textRef2}
//         style={{ display: "inline-block", fontSize: "3rem", padding: "0 20px" , color:'darkgray' , opacity:'20%'}}
//       >
//         Payment Gateway Integration Animations Performance Jwt Security 
//         Payment Gateway Integration Animations Performance Jwt Security 
//         Payment Gateway Integration Animations Performance Jwt Security 
//       </h1>
//       <h1
      
//         style={{ display: "inline-block", fontSize: "3rem", padding: "0 20px" }}
//       >
//         This text scrolls horizontally as you scroll down the page!
//         This text scrolls horizontally as you scroll down the page!
//         This text scrolls horizontally as you scroll down the page!
//       </h1>
//     </div> 
        



//     </div>



// <div style={{marginLeft:'3vw'}}>


//  <h1 className="scroll-fade" ref={contactRef} style={{ fontSize: '1em', margin: '0' }}>Contact</h1>
//     <h1  className="scroll-fade" style={{ color: 'cyan', fontSize: '3em', margin: '0' }}>Contact</h1>
//  <h1 className="scroll-fade" style={{ fontSize: '1em', margin: '' }}>Get in touch</h1>

// {/* 
//   <p>Contact</p>
//   <h1 className="scroll-fade">Contact</h1>
//   <p>Get in Touch</p> */}
//   <div className="scroll-fade" style={{display:"flex",justifyContent:'center'}}>
    

// {/* contactform */}
// <form ref={form} onSubmit={sendEmail} className="emailform">
//       <input style={{border:'2px solid cyan', height:'7vh', paddingLeft:'1vw',background:'black', borderRadius:'10px',color:'white'}} type="text" name="user_name" placeholder="Your Name" required />
//       <input type="email" name="user_email" placeholder="Your Email" required style={{border:'2px solid cyan', height:'7vh', paddingLeft:'1vw',background:'black', borderRadius:'10px'}} />
//       <textarea name="message"  style={{border:'2px solid cyan', height:'20vh', paddingLeft:'1vw',background:'black', borderRadius:'10px',color:'white'}}  placeholder="Your Message" required />
//       <button style={{border:'2px solid cyan', height:'7vh', padding:'', borderRadius:'10px',background:'black',color:'white'}} type="submit">Send</button>
//     </form>
//   </div>
//   <section
 
// >


//   <div className="resume" >

//   <h1>Download My Resume</h1>
//   <a
//     href="/BarinderSingh.pdf"   
//     download="BarinderSingh.pdf"
//     className="lets-talk-btn resumebtn"
    
//     >
//     Download Resume
//   </a>
//     </div>
// </section>




// </div>

//       {/* Footer */}
//       <footer
//         style={{
//           padding: "40px 20px",
//           background: 'rgb(17, 17, 17)',
//           textAlign: "center",
//           fontSize: "1rem",
//           color: "#777",
//         }}
//         >
//         © {new Date().getFullYear()} Barinder Singh 2k26. Built with React & GSAP.
//       </footer>
        
//     </div>
//   </>
//   );
// };



// export default App;





import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import bscustomimage from './bscustom.png'
import { Typewriter } from 'react-simple-typewriter';
import emailjs from '@emailjs/browser';

import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  ExternalLink, 
  ArrowRight,
  Code2,
  Menu,
  X,
  Server,
  Layers,
  Terminal,
  Database,
  Globe,
  Check,
  Loader2
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SOCIAL_LINKS = [
  { icon: <Github size={20} />, url: 'https://github.com/bsingh-1997' },
  { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/barinder-singh-99a179203/' },
  { icon: <Instagram size={20} />, url: '#' },
  { icon: <Mail size={20} />, url: 'mailto:barindersingh1997@gmail.com' },
];

const SKILLS = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Vite', icon: 'https://www.vectorlogo.zone/logos/vitejs/vitejs-icon.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'AWS Lambda', icon: 'https://www.vectorlogo.zone/logos/amazon_awslambda/amazon_awslambda-icon.svg' },
  { name: 'API Gateway', icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
  { name: 'AWS S3', icon: 'https://www.vectorlogo.zone/logos/amazon_s3/amazon_s3-icon.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'Vercel', icon: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'GSAP', icon: 'https://raw.githubusercontent.com/Marat-Dykhanov/dev-icons/main/icons/gsap.svg' },
];

const PROJECTS = [
  {
    id: 1,
    title: 'BS-Customs (E-Store)',
    description: 'A premium Car modification customization and retail platform built with MERN stack. Features complex GSAP animations and seamless payment integration.',
    image: bscustomimage,
    tags: ['React', 'Node.js', 'MongoDB', 'GSAP'],
    link: 'https://bs-customs-frontend.vercel.app/',
    github: 'https://github.com/bsingh-1997'
  },
  {
    id: 2,
    title: 'BlogBrew',
    description: 'A modern blogging platform. Minimalist design with robust markdown support and social interactions.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    tags: ['Next.js', 'Express', 'JWT', 'Tailwind'],
    link: 'https://blogbrew-frontend.vercel.app/allblogs',
    github: 'https://github.com/bsingh-1997'
  }
];

const Navbar = ({ scrollTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];


  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4 bg-glass' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter cursor-pointer group flex items-center gap-2" onClick={() => scrollTo('home')}>
          <span className="text-white group-hover:text-[#00f5ff] transition-colors">BARINDER</span>
          <span className="bg-[#00f5ff] text-black px-2 py-0.5 rounded text-sm font-black">SINGH</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="text-gray-400 hover:text-white text-[10px] font-black transition-colors uppercase tracking-[0.2em]">
              {link.name}
            </button>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/5 p-8 flex flex-col gap-8 animate-in slide-in-from-top duration-300 md:hidden">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => { scrollTo(link.id); setIsOpen(false); }} className="text-3xl font-black text-left hover:text-[#00f5ff] font-space uppercase">
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const marqueeRef = useRef(null);
  const letterRefs = useRef([]);


  
    const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);
  
  const formRef = useRef();


  
  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSending(true);
    setError(null);
    
    emailjs.sendForm(
      'service_9c31sku',     // Your EmailJS Service ID
      'template_0r0nx2l',    // Your EmailJS Template ID
      formRef.current,
      'tS5eS0D7fQfDWlnhR'    // Your EmailJS Public Key
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setIsSent(true);
      setIsSending(false);
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
      }
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    })
    .catch((error) => {
      console.error('Email send failed:', error.text);
      setError('Failed to send message. Please try again or email me directly.');
      setIsSending(false);
    });
  };





  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => { window.removeEventListener('scroll', handleScroll); clearTimeout(timer); };
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const fadeEls = gsap.utils.toArray('.scroll-fade');
    fadeEls.forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 50 }, { 
        opacity: 1, y: 0, duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
      });
    });

    const highlightWords = gsap.utils.toArray('.highlight-word');
    highlightWords.forEach((word) => {
      gsap.to(word, {
        backgroundPositionX: '0%', ease: 'none',
        scrollTrigger: { trigger: word, start: 'top 80%', end: 'top 30%', scrub: true }
      });
    });

    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50, ease: 'none',
        scrollTrigger: { trigger: marqueeRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 }
      });
    }

    gsap.to('.hero-float', { y: -20, duration: 2, repeat: -1, yoyo: true, ease: 'power1.inOut' });

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()); };
  }, [isLoading]);

  const scrollToSection = useCallback((id) => {
    gsap.to(window, { duration: 1.2, scrollTo: { y: `#${id}`, offsetY: 80 }, ease: 'power3.inOut' });
  }, []);

  const handleLetterHover = (index, enter) => {
    gsap.to(letterRefs.current[index], {
      y: enter ? -10 : 0,
      color: enter ? '#00f5ff' : '#ffffff',
      scale: enter ? 1.2 : 1,
      duration: 0.4,
      ease: enter ? 'elastic.out(1, 0.3)' : 'power2.out'
    });
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] z-[1000] flex flex-col items-center justify-center">
        <div className="w-24 h-24 relative flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-[#00f5ff]/10 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 border-t-4 border-[#00f5ff] rounded-full animate-spin"></div>
          <Code2 size={32} className="text-[#00f5ff]" />
        </div>
        <p className="mt-10 font-space text-[10px] uppercase tracking-[0.8em] text-[#00f5ff] animate-pulse font-black">Booting System</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-[#00f5ff] selection:text-black min-h-screen">
      <div className="fixed top-0 left-0 h-1 bg-[#00f5ff] z-[1001] transition-all duration-100 ease-out shadow-[0_0_15px_#00f5ff]" style={{ width: `${scrollProgress}%` }} />
      <Navbar scrollTo={scrollToSection} />

      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-[#00f5ff]/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 items-center gap-12 relative z-10">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-10">
              <span className="w-2 h-2 bg-[#00f5ff] rounded-full animate-ping" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-[#00f5ff]">Available for Work</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-none font-space tracking-tighter">
              {"Barinder Singh".split('').map((char, i) => (
                <span key={i} ref={(el) => { letterRefs.current[i] = el; }} className="inline-block cursor-default whitespace-pre" onMouseEnter={() => handleLetterHover(i, true)} onMouseLeave={() => handleLetterHover(i, false)}>
                  {char}
                </span>
              ))}
            </h1>
            <div className="text-xl md:text-4xl text-gray-400 mb-12 h-14 font-space font-medium">
              <Typewriter words={['Full Stack Developer', 'AWS Architect', 'Creative UI Specialist']} loop={0} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
            </div>
            <p className="text-gray-500 text-lg max-w-xl mb-12 leading-relaxed font-light">
              I transform complex logic into aesthetic, modern world applications. Specialized in MERN stack and scalable AWS cloud solutions.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <button onClick={() => scrollToSection('contact')} className="group px-12 py-5 bg-[#00f5ff] text-black font-black uppercase tracking-widest text-xs rounded-xl flex items-center gap-3 hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_-10px_#00f5ff]">
                Let's Talk <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex gap-6">
                {SOCIAL_LINKS.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#00f5ff] transition-all transform hover:scale-125">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
               <div className="absolute inset-0 bg-[#00f5ff]/20 blur-[120px] animate-pulse rounded-full" />
               <img src="https://bsingh-1997.github.io/portfolio/static/media/code.b705d32595c81c5c92d9.png" alt="Code Illustration" className="hero-float relative z-10 w-full max-w-lg drop-shadow-[0_30px_60px_rgba(0,245,255,0.4)] brightness-110" />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 bg-[#0d0d0d] border-y border-white/5 relative">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="mb-24 scroll-fade">
            <span className="text-[#00f5ff] uppercase tracking-[0.5em] font-black text-xs mb-4 block">Work History</span>
            <h2 className="text-5xl md:text-8xl font-black font-space uppercase">Experience</h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 p-12 md:p-20 rounded-[3rem] border border-white/5 hover:border-[#00f5ff]/20 transition-all duration-700 scroll-fade relative overflow-hidden backdrop-blur-3xl group">
               <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-30 transition-all transform group-hover:scale-110">
                  <Server size={100} className="text-[#00f5ff]" />
               </div>
               
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16 relative z-10">
                 <div>
                    <h3 className="text-4xl md:text-5xl font-black font-space text-white mb-2 tracking-tighter uppercase italic">iPage</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-[#00f5ff] text-xl font-bold font-space uppercase">Full Stack Developer</span>
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                      <span className="text-gray-400 font-medium tracking-widest text-sm uppercase">6 MONTHS</span>
                    </div>
                 </div>
                 <a href="https://dronetv.in" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-[#00f5ff] hover:text-black transition-all font-black text-[10px] tracking-[0.2em] uppercase">
                    Launch dronetv.in <ExternalLink size={14} className="inline ml-2" />
                 </a>
               </div>

               <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                 <div className="space-y-8">
                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                      Lead the development of the <span className="text-white font-bold">Drone TV</span> backend architecture, contributing to the first major platform in India for high-quality drone platform.
                    </p>
                    <div className="flex flex-wrap gap-3">
                       {['AWS Lambda', 'S3', 'API Gateway', 'React', 'Node.js', 'Forms'].map(t => (
                         <span key={t} className="px-4 py-1.5 bg-[#00f5ff]/10 text-[#00f5ff] text-[10px] font-black uppercase tracking-widest rounded-lg">{t}</span>
                       ))}
                    </div>
                 </div>
                 
                 <div className="space-y-6">
                    <div className="flex gap-6 group/item">
                       <div className="w-12 h-12 shrink-0 bg-[#00f5ff]/10 rounded-2xl flex items-center justify-center text-[#00f5ff] group-hover/item:bg-[#00f5ff] group-hover/item:text-black transition-all">
                         <Terminal size={20} />
                       </div>
                       <div>
                         <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">Backend Architecture</h4>
                         <p className="text-gray-500 text-sm leading-relaxed">Created nearly <span className="text-[#00f5ff] font-bold">50+ AWS Lambda functions</span> (REST APIs) to handle complex media workflows and user data.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 group/item">
                       <div className="w-12 h-12 shrink-0 bg-[#00f5ff]/10 rounded-2xl flex items-center justify-center text-[#00f5ff] group-hover/item:bg-[#00f5ff] group-hover/item:text-black transition-all">
                         <Layers size={20} />
                       </div>
                       <div>
                         <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">Frontend Contribution</h4>
                         <p className="text-gray-500 text-sm leading-relaxed">Majorly contributed to complex forms, interactive UIs, and state management in the React frontend.</p>
                       </div>
                    </div>
                    <div className="flex gap-6 group/item">
                       <div className="w-12 h-12 shrink-0 bg-[#00f5ff]/10 rounded-2xl flex items-center justify-center text-[#00f5ff] group-hover/item:bg-[#00f5ff] group-hover/item:text-black transition-all">
                         <Database size={20} />
                       </div>
                       <div>
                         <h4 className="text-lg font-bold text-white mb-1 uppercase tracking-tight">Cloud Infrastructure</h4>
                         <p className="text-gray-500 text-sm leading-relaxed">Managed secure file storage using AWS S3 Buckets and optimized traffic via AWS API Gateways.</p>
                       </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="scroll-fade">
              <span className="text-[#00f5ff] uppercase tracking-[0.5em] font-black text-xs mb-4 block">Tech Stack</span>
              <h2 className="text-5xl md:text-8xl font-black font-space">Expertise</h2>
            </div>
            <p className="text-gray-500 max-w-md scroll-fade font-light leading-relaxed">
              Crafting premium user experiences using a blend of modern frontend architecture and scalable cloud infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {SKILLS.map((skill, i) => (
              <div key={i} className="group p-10 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-[#00f5ff]/40 hover:bg-[#00f5ff]/5 transition-all duration-500 flex flex-col items-center justify-center gap-6 scroll-fade transform hover:-translate-y-2">
                <div className="w-14 h-14 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">
                   <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-white text-center transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 bg-[#0d0d0d]">
        <div className="container mx-auto px-6">
          <div className="mb-32 scroll-fade flex justify-between items-end">
            <div>
              <span className="text-[#00f5ff] uppercase tracking-[0.5em] font-black text-xs mb-4 block">Selected Works</span>
              <h2 className="text-5xl md:text-8xl font-black font-space">Projects</h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-20">
            {PROJECTS.map((project, i) => (
              <div key={project.id} className="group scroll-fade flex flex-col gap-10">
                <div className="relative aspect-video overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/5 shadow-2xl">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-10">
                      <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-gray-300 text-lg mb-4">{project.description}</p>
                        <div className="flex gap-6">
                           <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#00f5ff] font-black text-xs uppercase tracking-widest">Live Demo <ExternalLink size={16} /></a>
                           <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest">GitHub <Github size={16} /></a>
                        </div>
                      </div>
                   </div>
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                </div>
                <div className="px-6">
                  <div className="flex gap-3 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-black tracking-widest px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-500">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black font-space group-hover:text-[#00f5ff] transition-colors uppercase tracking-tighter">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div ref={marqueeRef} className="flex whitespace-nowrap gap-24">
          {[1, 2, 3, 4].map((_) => (
            <div key={_} className="flex gap-24 items-center">
              <span className="text-8xl md:text-[12rem] font-black text-transparent uppercase font-space opacity-10" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}>
                AWS LAMBDA REACT NODEJS GSAP TYPESCRIPT MONGODB REDUX VITE EXPRESS
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* <section id="contact" className="py-40 bg-[#0a0a0a] relative">
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[#00f5ff]/5 rounded-full blur-[200px] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24">
            <div className="scroll-fade">
              <span className="text-[#00f5ff] uppercase tracking-[0.5em] font-black text-xs mb-8 block">Inquiries</span>
              <h2 className="text-6xl md:text-8xl font-black font-space mb-12 leading-[0.9] tracking-tighter uppercase">Let's <br />Collaborate.</h2>
              <div className="space-y-12">
                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-[#00f5ff] shadow-[0_0_30px_rgba(0,245,255,0.1)]">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Email Me</h4>
                    <p className="text-2xl font-bold font-space text-white">barindersingh1997@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-[#00f5ff] shadow-[0_0_30px_rgba(0,245,255,0.1)]">
                    <Globe size={32} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Based In</h4>
                    <p className="text-2xl font-bold font-space text-white">Global Remote</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scroll-fade bg-[#111] p-12 md:p-16 rounded-[4rem] border border-white/5 shadow-3xl backdrop-blur-3xl relative">
               <div className="absolute top-0 right-0 w-48 h-48 bg-[#00f5ff]/5 blur-[100px] rounded-full" />
               <form className="space-y-10 relative z-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Your Name</label>
                  <input type="text" placeholder="John Wick" className="w-full bg-white/5 border border-white/10 rounded-2xl px-10 py-6 outline-none focus:border-[#00f5ff] transition-all text-white font-medium placeholder:text-gray-700" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Your Email</label>
                  <input type="email" placeholder="john@continental.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-10 py-6 outline-none focus:border-[#00f5ff] transition-all text-white font-medium placeholder:text-gray-700" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Project Details</label>
                  <textarea rows={4} placeholder="Tell me about the magic we're building..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-10 py-6 outline-none focus:border-[#00f5ff] transition-all text-white font-medium resize-none placeholder:text-gray-700" />
                </div>
                <button type="button" className="w-full py-7 bg-[#00f5ff] text-black font-black uppercase tracking-[0.4em] rounded-3xl hover:bg-white transition-all duration-700 flex items-center justify-center gap-4 group shadow-[0_20px_40px_-15px_rgba(0,245,255,0.4)]">
                  Send Message <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

<section id="contact" className="py-40 bg-[#0a0a0a] relative">
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[#00f5ff]/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24">
          <div className="scroll-fade">
            <span className="text-[#00f5ff] uppercase tracking-[0.5em] font-black text-xs mb-8 block">Inquiries</span>
            <h2 className="text-6xl md:text-8xl font-black font-space mb-12 leading-[0.9] tracking-tighter uppercase">Let's <br />Collaborate.</h2>
            
            {/* Success Message */}
            {isSent && (
              <div className="mb-10 p-6 bg-[#00f5ff]/10 border border-[#00f5ff]/30 rounded-3xl animate-in slide-in-from-bottom">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#00f5ff] rounded-full flex items-center justify-center">
                    <Check size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Message Sent!</h4>
                    <p className="text-gray-300 text-sm">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Error Message */}
            {error && (
              <div className="mb-10 p-6 bg-red-500/10 border border-red-500/30 rounded-3xl">
                <p className="text-red-400">{error}</p>
                <p className="text-gray-400 text-sm mt-2">
                  You can also email me directly at: barindersingh1997@gmail.com
                </p>
              </div>
            )}
            
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-[#00f5ff] shadow-[0_0_30px_rgba(0,245,255,0.1)]">
                  <Mail size={32} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Email Me</h4>
                  <p className="text-2xl font-bold font-space text-white">barindersingh1997@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-[#00f5ff] shadow-[0_0_30px_rgba(0,245,255,0.1)]">
                  <Globe size={32} />
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Based In</h4>
                  <p className="text-2xl font-bold font-space text-white">Global Remote</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="scroll-fade bg-[#111] p-12 md:p-16 rounded-[4rem] border border-white/5 shadow-3xl backdrop-blur-3xl relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00f5ff]/5 blur-[100px] rounded-full" />
            
            {/* Update the form with ref and onSubmit */}
            <form ref={formRef} onSubmit={sendEmail} className="space-y-10 relative z-10">
              <div className="space-y-4">
                <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Your Name</label>
                <input 
                  id="name"
                  name="user_name"  // EmailJS field name
                  type="text" 
                  placeholder="John Wick" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-10 py-6 outline-none focus:border-[#00f5ff] transition-all text-white font-medium placeholder:text-gray-700" 
                  required
                  disabled={isSending}
                />
              </div>
              
              <div className="space-y-4">
                <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Your Email</label>
                <input 
                  id="email"
                  name="user_email"  // EmailJS field name
                  type="email" 
                  placeholder="john@continental.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-10 py-6 outline-none focus:border-[#00f5ff] transition-all text-white font-medium placeholder:text-gray-700" 
                  required
                  disabled={isSending}
                />
              </div>
              
              <div className="space-y-4">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Project Details</label>
                <textarea 
                  id="message"
                  name="message"  // EmailJS field name
                  rows={4} 
                  placeholder="Tell me about the magic we're building..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-10 py-6 outline-none focus:border-[#00f5ff] transition-all text-white font-medium resize-none placeholder:text-gray-700"
                  required
                  disabled={isSending}
                />
              </div>
              
              <button 
                type="submit"  // Changed from type="button" to type="submit"
                disabled={isSending}
                className={`w-full py-7 text-black font-black uppercase tracking-[0.4em] rounded-3xl transition-all duration-700 flex items-center justify-center gap-4 group shadow-[0_20px_40px_-15px_rgba(0,245,255,0.4)] ${
                  isSending 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-[#00f5ff] hover:bg-white hover:scale-[1.02]'
                }`}
              >
                {isSending ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message 
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                  </>
                )}
              </button>
              
              {/* Optional: Privacy note */}
              <p className="text-gray-600 text-xs text-center pt-4">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

      <footer className="py-24 border-t border-white/5 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-black font-space tracking-tighter mb-4 text-white">BARINDER SINGH</h3>
            <p className="text-gray-600 text-[10px] font-black tracking-[0.4em] uppercase">Built with precision & GSAP © {new Date().getFullYear()}</p>
          </div>
          <div className="flex gap-12">
            {['Home', 'Experience', 'Projects'].map(item => (
              <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-[#00f5ff] transition-colors">{item}</button>
            ))}
          </div>
          <div className="flex gap-8">
            {SOCIAL_LINKS.map((link, i) => (
              <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#00f5ff] hover:scale-125 transition-all">{link.icon}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;