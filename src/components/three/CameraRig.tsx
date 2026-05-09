"use client";

import { useFrame, useThree } from "@react-three/fiber";
import useMousePosition from "@/hooks/useMousePosition";

export default function CameraRig() {
  const { camera } = useThree();
  const mouse = useMousePosition();

  useFrame(() => {
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}
