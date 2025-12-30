import { Canvas } from '@react-three/fiber';
import { Float, Icosahedron, Octahedron, Torus, MeshDistortMaterial, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingShape({ position, color, size, speed }: { position: [number, number, number]; color: string; size: number; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[size, 1]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Icosahedron>
    </Float>
  );
}

function AnimatedTorus({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Torus ref={meshRef} args={[1, 0.3, 16, 32]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Torus>
    </Float>
  );
}

function AnimatedOctahedron({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Octahedron ref={meshRef} args={[0.8, 0]} position={position}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.2}
        speed={3}
        roughness={0}
        metalness={0.9}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </Octahedron>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        <spotLight position={[0, 10, 0]} intensity={0.8} color="#ffaa00" angle={0.3} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <FloatingShape position={[-4, 2, -2]} color="#00ffff" size={0.8} speed={0.5} />
        <FloatingShape position={[4, -1, -3]} color="#ff00ff" size={0.6} speed={0.7} />
        <FloatingShape position={[-3, -2, -4]} color="#ffaa00" size={0.5} speed={0.4} />
        <FloatingShape position={[3, 3, -5]} color="#00ffff" size={0.4} speed={0.6} />
        
        <AnimatedTorus position={[5, 0, -6]} color="#ff00ff" />
        <AnimatedTorus position={[-5, -3, -8]} color="#00ffff" />
        
        <AnimatedOctahedron position={[0, -4, -4]} color="#ffaa00" />
        <AnimatedOctahedron position={[-6, 1, -5]} color="#ff00ff" />
      </Canvas>
    </div>
  );
}
