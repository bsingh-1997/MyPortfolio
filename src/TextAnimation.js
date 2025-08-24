// src/components/TextAnimation.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TextAnimation = () => {
  const textRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    // Simple fade-in
    gsap.from(textRef.current, {
      duration: 1,
      y: -50,
      opacity: 0,
      ease: 'power3.out',
    });

    // Staggered animation for multiple lines
    gsap.from(linesRef.current, {
      duration: 1,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      delay: 0.5,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div style={{ padding: '3rem' }}>
      <h1 ref={textRef}>Welcome to My Portfolio</h1>
      <div style={{ marginTop: '1rem' }}>
        {['Frontend Developer.', 'Creative Coder.', 'React Enthusiast.'].map((line, i) => (
          <p
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
            style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TextAnimation;
