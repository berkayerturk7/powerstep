
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// TypeScript fix for React Three Fiber elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      icosahedronGeometry: any;
      meshBasicMaterial: any;
      octahedronGeometry: any;
      instancedMesh: any;
      circleGeometry: any;
      ambientLight: any;
      pointLight: any;
    }
  }
}

// Custom hook for floating animation without external libraries
const FloatingMesh = ({ 
  position, 
  color, 
  scale, 
  speed = 1, 
  offset = 0 
}: { 
  position: [number, number, number], 
  color: string, 
  scale: number, 
  speed?: number,
  offset?: number
}) => {
  const ref = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      
      // Continuous Rotation
      ref.current.rotation.x = Math.sin(t * 0.2 * speed + offset) * 0.2;
      ref.current.rotation.y += 0.005 * speed;

      // Floating Motion (Up/Down)
      // Base Y position + sine wave offset
      ref.current.position.y = position[1] + Math.sin(t * 0.5 * speed + offset) * 0.3;
    }
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Outer Wireframe - More Opaque */}
      <mesh>
        <icosahedronGeometry args={[1, 0]} /> {/* Detail level 0 for cleaner look */}
        <meshBasicMaterial color={color} wireframe transparent opacity={0.3} />
      </mesh>
      
      {/* Inner Core - Solid but transparent */}
      <mesh scale={0.5}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} />
      </mesh>
    </group>
  );
};

// Rising particles simulating data up-stream
const DataStream = ({ count = 60 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const particles = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 8 - 2
      ),
      speed: Math.random() * 0.02 + 0.01,
      scale: Math.random() * 0.4 + 0.1
    }));
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      particle.position.y += particle.speed;
      if (particle.position.y > 8) {
        particle.position.y = -8;
      }

      dummy.position.copy(particle.position);
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <circleGeometry args={[0.05, 8]} />
      <meshBasicMaterial color="#0369a1" transparent opacity={0.6} side={THREE.DoubleSide} />
    </instancedMesh>
  );
};

// Auto Camera Movement to ensure scene is always alive
const AutoCamera = () => {
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Gentle figure-8 motion
    state.camera.position.x = Math.sin(t * 0.1) * 2;
    state.camera.position.y = Math.cos(t * 0.15) * 1;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 40 }} gl={{ alpha: true }}>
        <AutoCamera />
        
        {/* Lights */}
        <ambientLight intensity={1} />
        
        {/* 
           Shapes are positioned to be visible on the sides 
           and not obscured by the center text 
           Colors are darker (Sky-700/800) for visibility on white
        */}
        
        {/* Right Side */}
        <FloatingMesh position={[5, 1, -2]} color="#0369a1" scale={2.5} speed={0.8} offset={0} />
        <FloatingMesh position={[7, -3, -4]} color="#0ea5e9" scale={1.5} speed={1.2} offset={2} />
        
        {/* Left Side */}
        <FloatingMesh position={[-5, -1, -2]} color="#0284c7" scale={2.2} speed={1} offset={1} />
        <FloatingMesh position={[-4, 3, -5]} color="#0369a1" scale={1.8} speed={0.9} offset={3} />
        
        {/* Distant Background */}
        <FloatingMesh position={[0, -6, -8]} color="#94a3b8" scale={4} speed={0.5} offset={4} />

        <DataStream />
      </Canvas>
    </div>
  );
};

export default Hero3D;
