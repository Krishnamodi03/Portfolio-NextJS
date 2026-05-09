"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import ParticleField from "./ParticleField";
import FloatingMesh from "./FloatingMesh";
import CameraRig from "@/components/three/CameraRig";

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.8}
          color="#06b6d4"
        />

        <ParticleField />
        <FloatingMesh />
        <CameraRig />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.3}
            luminanceSmoothing={0.9}
            intensity={1.5}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
