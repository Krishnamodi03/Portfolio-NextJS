"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function buildPrimaryGeo() {
  const positions = new Float32Array(2000 * 3);
  for (let i = 0; i < 2000; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return geo;
}

function buildAccentGeo() {
  const positions = new Float32Array(500 * 3);
  for (let i = 0; i < 500; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 4 + (Math.random() - 0.5) * 1.5;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 0.5;
    positions[i * 3 + 2] = Math.sin(angle) * radius;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return geo;
}

const primaryGeo = buildPrimaryGeo();
const accentGeo = buildAccentGeo();

export default function ParticleField() {
  const primaryRef = useRef<THREE.Points>(null);
  const accentRef = useRef<THREE.Points>(null);

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
