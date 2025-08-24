import React, { useEffect, useReducer, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap"

export default function Navbar({scrollToSection,refs}) {
  const [isOpen, setIsOpen] = useState(false);
  // const {heroscRef,skillsRef}= sections
 const handleClick = (ref) => {
    scrollToSection(ref);   // scroll to the section
    setIsOpen(false);       // close navbar
  };

const menuRef = useRef(null)
const linksRef = useRef(null)
  
  // Animate dropdown open/close
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );

      gsap.fromTo(
        linksRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }
  }, [isOpen]);





   const iconRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(iconRef.current, {
        rotate: 180,
        duration: 0.4,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);






  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        // backgroundColor: "#111",
        // opacity:'70%',
        background:'transparent',
        padding: "2vh 0",
        // padding: "10px 20px",
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // maxWidth: "1200px",
          maxWidth: "90%",
          margin: "auto",
        }}
      >
        {/* Logo */}
        <div style={{ color: "cyan", fontWeight: "bold", fontSize: "20px" }}>
          B
        </div>

        {/* Hamburger Menu Button */}
        <div ref={iconRef}
          style={{ cursor: "pointer" }}
          onClick={() => setIsOpen(!isOpen)}
          >{isOpen?<div style={{color:'white'}}><IoMdClose  style={{ transform: "rotate(180deg)", transition: "0.3s" }} size={'2em'} /></div>:<div style={{color:'white'}}>
       
            <RxHamburgerMenu size={'1.7em'} style={{ transform: "rotate(0deg)", transition: "0.3s" }} />
            </div>}
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul ref={menuRef}
        style={{
            listStyle: "none",
            padding: "10px",
            // background: "#111",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            height:'85vh',
            width:'95%',
            background: "rgba(0, 0, 0, 0.5)", // dark transparent
            backdropFilter: "blur(8px)",       // blur effect
          WebkitBackdropFilter: "blur(8px)", // for Safari
          // background:'transparent'
          alignItems:'center',
          justifyContent:'center'
        }}
        >

                    
            <li
              ref={linksRef} 
            >
              <a
                style={{
                  fontSize:'2em',
                  color: "white",
                  textDecoration: "none",
                  padding: "8px 0",
                  display: "block",
                  transition: "0.3s",
                
                }}
                onMouseEnter={(e) => (e.target.style.color = "cyan")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
                // onClick={() => setIsOpen(false)}
                onClick={() => handleClick(refs.homeRef)}
                >
                Home              </a>
              
              <a
                // ref={linksRef} 
                style={{
                  fontSize:'2em',
                  color: "white",
                  textDecoration: "none",
                  padding: "8px 0",
                  display: "block",
                  transition: "0.3s",
                  
                }} 
                onMouseEnter={(e) => (e.target.style.color = "cyan")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
                // onClick={() => setIsOpen(false)}
                onClick={() => handleClick(refs.skillsRef)}
                >
                Skills              </a>
              <a
                // ref={linksRef} 
                style={{
                  fontSize:'2em',
                  color: "white",
                  textDecoration: "none",
                  padding: "8px 0",
                  display: "block",
                  transition: "0.3s",
                
                }} 
                onMouseEnter={(e) => (e.target.style.color = "cyan")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
                // onClick={() => setIsOpen(false)}
                onClick={() => handleClick(refs.projectsRef)}
              >
                Projects             </a>
              <a
                // ref={linksRef} 
                style={{
                  fontSize:'2em',
                  color: "white",
                  textDecoration: "none",
                  padding: "8px 0",
                  display: "block",
                  transition: "0.3s",
                
                }} 
                onMouseEnter={(e) => (e.target.style.color = "cyan")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
                // onClick={() => setIsOpen(false)}
                onClick={() => handleClick(refs.contactRef)}
              >
                Contact              </a>
            </li>




          
        </ul>
      )}
    </nav>
  );
}

const barStyle = {
  width: "25px",
  height: "3px",
  backgroundColor: "white",
  margin: "4px 0",
};
