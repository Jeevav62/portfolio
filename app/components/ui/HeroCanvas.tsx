"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 1600;
const GOLD = new THREE.Color("#c9a84c");

function GoldParticles() {
  const points = useRef<THREE.Points>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const baseY = useRef<Float32Array | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const r = Math.random();
      arr[i * 3]     = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14 - 3;
      void r;
    }
    return arr;
  }, []);

  useEffect(() => {
    baseY.current = new Float32Array(positions.length / 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      baseY.current[i] = positions[i * 3 + 1];
    }
  }, [positions]);

  useFrame((state) => {
    if (!points.current || !baseY.current) return;
    const t = state.clock.elapsedTime;

    points.current.rotation.y = mouse.current.x * 0.06 + t * 0.01;
    points.current.rotation.x = mouse.current.y * 0.04 + t * 0.005;

    const pos = points.current.geometry.attributes.position;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const x = pos.getX(i);
      const wave = Math.sin(t * 0.4 + x * 0.25) * 0.15;
      pos.setY(i, baseY.current[i] + wave);
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color={GOLD}
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function WireframeOrb() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mesh.current.rotation.x = t * 0.15;
    mesh.current.rotation.y = t * 0.22;
    mesh.current.position.y = Math.sin(t * 0.6) * 0.25;
    mesh.current.position.x = Math.cos(t * 0.4) * 0.1;
  });

  return (
    <mesh ref={mesh} position={[4.5, 0.5, -2]}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshBasicMaterial
        color="#c9a84c"
        wireframe
        transparent
        opacity={0.1}
      />
    </mesh>
  );
}

function SmallOrb() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mesh.current.rotation.x = -t * 0.1;
    mesh.current.rotation.z = t * 0.18;
    mesh.current.position.y = Math.sin(t * 0.8 + 1) * 0.2;
  });

  return (
    <mesh ref={mesh} position={[-5, -1.5, -3]}>
      <octahedronGeometry args={[0.9, 0]} />
      <meshBasicMaterial
        color="#dfc070"
        wireframe
        transparent
        opacity={0.07}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <GoldParticles />
      <WireframeOrb />
      <SmallOrb />
    </Canvas>
  );
}
