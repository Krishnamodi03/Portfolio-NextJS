"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function AvatarScene() {
  const octa = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (octa.current) {
      octa.current.rotation.y += 0.005;
      octa.current.rotation.x = Math.sin(clock.elapsedTime * 0.4) * 0.2;
      octa.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.15;
    }
    if (ring.current) {
      ring.current.rotation.x += 0.003;
      ring.current.rotation.z += 0.002;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#3b82f6" />
      <pointLight position={[-3, -3, 3]} intensity={1} color="#06b6d4" />

      {/* Central octahedron */}
      <mesh ref={octa}>
        <octahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color="#3b82f6"
          roughness={0.1}
          metalness={0.8}
          emissive="#06b6d4"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Orbit ring */}
      <mesh ref={ring} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.2, 0.025, 8, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.6}
        />
      </mesh>
    </>
  );
}

export default function AvatarCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 60 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      className="w-full h-full"
    >
      <AvatarScene />
    </Canvas>
  );
}
