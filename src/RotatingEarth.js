// import React from "react";
// import Globe from "react-globe.gl";

// export default function RotatingEarth() {
//   return (
//     <div style={{ height: "500px" }}>
//       <Globe
//         globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//         backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
//         animateIn={true}
//       />
//     </div>
//   );
// }


import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef();

  // auto rotation
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0015; // slow spin
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial
       map={new THREE.TextureLoader().load("/textures/earth.jpg")}

      />
    </mesh>
  );
}

export default function RotatingEarth() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        {/* lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />

        {/* stars background */}
        <Stars radius={100} depth={50} count={5000} factor={4} fade />

        {/* earth */}
        <Earth />

        {/* controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
