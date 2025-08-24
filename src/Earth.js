import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0008; // slow auto rotation
    }
  });

  // Load only 2 textures
  const dayTexture = new THREE.TextureLoader().load("/textures/earth_day_8k.jpg");
  const nightTexture = new THREE.TextureLoader().load("/textures/earth_night_8k.jpg");

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshPhongMaterial
        map={dayTexture}
        emissiveMap={nightTexture}
        emissive={"#fff"}
        emissiveIntensity={4.5}
      />
    </mesh>
  );
}

export default function EarthGlobe() {
  return (
    <div style={{ width: "100%", height: "100vh", background: "transparent" }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} background={'transparent'}>
        {/* Lights are super important! */}
        <ambientLight intensity={1.6} />
        <directionalLight position={[5, 0, 5]} intensity={1.2} />

        {/* <Stars radius={100} depth={50} count={5000} factor={4} fade /> */}
        <Earth />
        <OrbitControls enableZoom={false} autoRotate={false} rotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
