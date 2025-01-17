'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Astronaut, Duck, Lights, Rocket } from './object';

export function SpaceScene() {
  return (
    <div className='h-[50rem] w-[50rem]'>
      <Suspense fallback={null}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0.5, 7.4]} fov={50} />

          <Model />
          <Lights />

          <EffectComposer>
            <Bloom
              intensity={2}
              luminanceThreshold={1}
              luminanceSmoothing={0.5}
              mipmapBlur
            />
          </EffectComposer>

          <OrbitControls makeDefault />
        </Canvas>
      </Suspense>
    </div>
  );
}

const Model = () => {
  const { nodes, animations } = useGLTF('/model/space.glb');

  return (
    <group rotation={[0.05, 0.1, 0]}>
      <Astronaut nodes={nodes} animations={animations} />
      <Rocket nodes={nodes} animations={animations} />
      <Duck nodes={nodes} animations={animations} />
    </group>
  );
};
