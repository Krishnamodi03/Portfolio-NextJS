"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingMesh() {
  const icosaRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (icosaRef.current) {
      icosaRef.current.rotation.x += 0.003;
      icosaRef.current.rotation.y += 0.004;
      icosaRef.current.position.y =
        0.5 + Math.sin(clock.elapsedTime * 0.6) * 0.25;
    }
    if (torusRef.current) {
      torusRef.current.rotation.y += 0.002;
      torusRef.current.rotation.z += 0.003;
      torusRef.current.position.y =
        -0.6 + Math.sin(clock.elapsedTime * 0.4 + 1.5) * 0.2;
    }
  });

  return (
    <>
      {/* Wireframe Icosahedron */}
      <mesh ref={icosaRef} position={[2.5, 0.5, -1]}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshStandardMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Metallic TorusKnot */}
      <mesh ref={torusRef} position={[-2.2, -0.6, -1.5]}>
        <torusKnotGeometry args={[0.6, 0.18, 120, 16]} />
        <meshStandardMaterial
          color="#06b6d4"
          roughness={0.05}
          metalness={0.9}
        />
      </mesh>
    </>
  );
}
