import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useAnimations } from '@react-three/drei';

interface DuckProps {
  nodes: Record<string, THREE.Object3D>;
  animations: THREE.AnimationClip[];
}

export function Duck({ nodes, animations }: DuckProps) {
  const group = useRef<THREE.Group>(null);
  const { actions } = useAnimations(animations, group);

  const duckObject = nodes.ArmatureDuck;

  useEffect(() => {
    const action = actions.DuckAnimation;
    if (action) action.reset().fadeIn(0.5).play();

    return () => {
      if (action) action.fadeOut(0.5);
    };
  }, [actions, duckObject]);

  return (
    <group ref={group}>
      <primitive object={duckObject} />
    </group>
  );
}
