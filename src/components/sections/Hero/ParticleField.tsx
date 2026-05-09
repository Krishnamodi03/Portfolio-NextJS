"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ParticleField() {
  const primaryRef = useRef<THREE.Points>(null);
  const accentRef = useRef<THREE.Points>(null);

  const [primaryGeo, accentGeo] = useMemo(() => {
    // Primary: 2000 random particles in a sphere
    const primaryPositions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      primaryPositions[i * 3] = (Math.random() - 0.5) * 12;
      primaryPositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      primaryPositions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(primaryPositions, 3));

    // Accent: 500 particles in a torus ring shape
    const accentPositions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 4 + (Math.random() - 0.5) * 1.5;
      accentPositions[i * 3] = Math.cos(angle) * radius;
      accentPositions[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
      accentPositions[i * 3 + 2] = Math.sin(angle) * radius;
    }
    const aGeo = new THREE.BufferGeometry();
    aGeo.setAttribute("position", new THREE.BufferAttribute(accentPositions, 3));

    return [pGeo, aGeo];
  }, []);

  useFrame(() => {
    if (primaryRef.current) {
      primaryRef.current.rotation.y += 0.0003;
      primaryRef.current.rotation.x += 0.0001;
    }
    if (accentRef.current) {
      accentRef.current.rotation.y -= 0.0005;
    }
  });

  return (
    <group>
      <points ref={primaryRef} geometry={primaryGeo}>
        <pointsMaterial
          transparent
          color="#3b82f6"
          size={0.015}
          sizeAttenuation
          depthWrite={false}
          opacity={0.8}
        />
      </points>
      <points ref={accentRef} geometry={accentGeo}>
        <pointsMaterial
          transparent
          color="#06b6d4"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
        />
      </points>
    </group>
  );
}
