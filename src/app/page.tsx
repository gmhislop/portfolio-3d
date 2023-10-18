'use client';

import { Canvas } from '@react-three/fiber';
import { Experience } from './components/modules/experience';

export default function Home() {
  return (
    <main>
      <Canvas
        shadows
        camera={{
          position: [0, 2, 5],
          fov: 30,
        }}
      >
        <color attach="background" args={['#ececec']} />
        <Experience />
      </Canvas>
    </main>
  );
}
