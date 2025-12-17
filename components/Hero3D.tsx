import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera, Sparkles } from '@react-three/drei';

// TypeScript fix for React Three Fiber elements
// We explicitly declare the elements used to avoid "Property does not exist" errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      mesh: any;
      icosahedronGeometry: any;
      meshStandardMaterial: any;
      octahedronGeometry: any;
      dodecahedronGeometry: any;
    }
  }
}

const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
        
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore */}
        <directionalLight position={[10, 10, 5]} intensity={1} />
        {/* @ts-ignore */}
        <pointLight position={[-10, -10, -5]} color="#38bdf8" intensity={2} />

        {/* Sağ Taraf - İkonik Şekil */}
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          {/* @ts-ignore */}
          <mesh position={[6, 1, -2]} scale={2}>
            {/* @ts-ignore */}
            <icosahedronGeometry args={[1, 0]} />
            {/* @ts-ignore */}
            <meshStandardMaterial color="#0369a1" wireframe transparent opacity={0.6} />
          {/* @ts-ignore */}
          </mesh>
        </Float>

        {/* Sol Taraf - Dengeleyici Şekil */}
        <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
          {/* @ts-ignore */}
          <mesh position={[-6, -2, -2]} scale={2.5}>
             {/* @ts-ignore */}
             <octahedronGeometry />
             {/* @ts-ignore */}
             <meshStandardMaterial color="#0ea5e9" wireframe transparent opacity={0.5} />
          {/* @ts-ignore */}
          </mesh>
        </Float>
        
        {/* Üst Orta - Uzak Detay */}
        <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
          {/* @ts-ignore */}
          <mesh position={[0, 5, -8]} scale={1.5}>
             {/* @ts-ignore */}
             <dodecahedronGeometry />
             {/* @ts-ignore */}
             <meshStandardMaterial color="#94a3b8" wireframe transparent opacity={0.3} />
          {/* @ts-ignore */}
          </mesh>
        </Float>

        {/* Dijital Veri Akışı Efekti */}
        <Sparkles 
          count={80} 
          scale={20} 
          size={4} 
          speed={0.4} 
          opacity={0.6}
          color="#0284c7"
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;