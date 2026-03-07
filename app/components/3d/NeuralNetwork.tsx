"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface NodeProps {
  position: THREE.Vector3;
  color: string;
}

function Node({ position, color }: NodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  );
}

interface ConnectionProps {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color: string;
}

function Connection({ start, end, color }: ConnectionProps) {
  const lineRef = useRef<THREE.Line>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      start.x, start.y, start.z,
      end.x, end.y, end.z
    ]);
    geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    return geo;
  }, [start, end]);

  const material = useMemo(() => {
    return new THREE.LineBasicMaterial({ 
      color: color, 
      transparent: true, 
      opacity: 0.3 
    });
  }, [color]);

  return (
    <primitive object={new THREE.Line(geometry, material)} />
  );
}

function NeuralNetworkScene() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  const nodes = useMemo(() => {
    const nodeCount = 60;
    const nodeArray: { position: THREE.Vector3; color: string }[] = [];
    const colors = ["#3b82f6", "#a855f7", "#06b6d4"];

    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 3 + Math.random() * 4;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      nodeArray.push({
        position: new THREE.Vector3(x, y, z),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    return nodeArray;
  }, []);

  const connections = useMemo(() => {
    const connectionArray: { start: THREE.Vector3; end: THREE.Vector3; color: string }[] = [];
    const maxDistance = 2.5;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < maxDistance) {
          connectionArray.push({
            start: nodes[i].position,
            end: nodes[j].position,
            color: nodes[i].color,
          });
        }
      }
    }

    return connectionArray;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;

      // Mouse interaction
      const targetX = (mouse.x * viewport.width) / 50;
      const targetY = (mouse.y * viewport.height) / 50;
      groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.02;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />

      {nodes.map((node, index) => (
        <Node key={index} position={node.position} color={node.color} />
      ))}

      {connections.map((connection, index) => (
        <Connection
          key={index}
          start={connection.start}
          end={connection.end}
          color={connection.color}
        />
      ))}
    </group>
  );
}

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.03,
      color: "#ffffff",
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry} material={material} />
  );
}

export default function NeuralNetwork() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#030712"]} />
        <fog attach="fog" args={["#030712", 5, 20]} />
        <NeuralNetworkScene />
        <Particles />
      </Canvas>
    </div>
  );
}
