// src/pages/AnimatedPortfolio.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedPortfolio = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const animateSection = (ref, yStart = 50, opacity = 0) => {
      gsap.fromTo(
        ref.current,
        { opacity, y: yStart },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
          },
        }
      );
    };

    animateSection(heroRef, 0, 0); // On load
    animateSection(aboutRef);
    animateSection(skillsRef);
    animateSection(projectsRef);
    animateSection(contactRef);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          background: '#0f172a',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}
      >
        <h1 style={{ fontSize: '3rem' }}>Hi, I'm Barinder Singh</h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '600px' }}>
          I build beautiful full-stack websites with React, Node.js, and MongoDB.
        </p>
      </section>

      <section
        ref={aboutRef}
        style={{
          minHeight: '100vh',
          background: '#f8fafc',
          padding: '5rem 2rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2.5rem' }}>About Me</h2>
        <p style={{ maxWidth: '700px', margin: '2rem auto' }}>
          I'm a passionate developer with a strong focus on MERN stack development. I love crafting clean UI, building real-world web apps, and constantly learning.
        </p>
      </section>

      <section
        ref={skillsRef}
        style={{
          minHeight: '100vh',
          background: '#e2e8f0',
          padding: '5rem 2rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2.5rem' }}>Skills</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem' }}>
          <li>✅ React.js</li>
          <li>✅ Node.js & Express</li>
          <li>✅ MongoDB</li>
          <li>✅ GSAP & Framer Motion</li>
          <li>✅ JWT Auth, REST APIs</li>
        </ul>
      </section>

      <section
        ref={projectsRef}
        style={{
          minHeight: '100vh',
          background: '#1e293b',
          color: '#fff',
          padding: '5rem 2rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2.5rem' }}>Projects</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
          }}
        >
          {['Portfolio Site', 'E-Commerce App', 'Blog Platform'].map((project, i) => (
            <div
              key={i}
              style={{
                background: '#334155',
                padding: '2rem',
                borderRadius: '1rem',
                transform: 'scale(0.95)',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
            >
              <h3>{project}</h3>
              <p>Built using MERN stack with full authentication and dynamic features.</p>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={contactRef}
        style={{
          minHeight: '60vh',
          background: '#f1f5f9',
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: '2.5rem' }}>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn | GitHub | Twitter</p>
      </section>
    </div>
  );
};

export default AnimatedPortfolio;
