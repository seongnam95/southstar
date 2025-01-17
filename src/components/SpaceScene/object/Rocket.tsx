import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useAnimations } from '@react-three/drei';

interface RocketProps {
  nodes: Record<string, THREE.Object3D>;
  animations: THREE.AnimationClip[];
}

export function Rocket({ nodes, animations }: RocketProps) {
  const group = useRef<THREE.Group>(null);
  const { actions } = useAnimations(animations, group);

  const rocketObject = nodes.MeshRocket;

  useEffect(() => {
    const crystalMaterial = new THREE.MeshPhysicalMaterial({
      transparent: true,
      color: new THREE.Color('#220453'),
      transmission: 1.4,
      thickness: 2,
      ior: 2.5,
      clearcoat: 1,
      clearcoatRoughness: 0,
      metalness: 0.8,
      envMapIntensity: 2.5,
      attenuationDistance: 5,
    });

    rocketObject.traverse((child: THREE.Object3D) => {
      if (
        child.name === 'MeshRocketWindowGlass' &&
        child instanceof THREE.Mesh
      ) {
        child.material = crystalMaterial.clone();
      }
    });

    const action = actions.RocketFireAnimation;
    if (action) action.reset().fadeIn(0.5).play();

    return () => {
      if (action) action.fadeOut(0.5);
    };
  }, [actions, rocketObject]);

  return (
    <group ref={group}>
      <primitive object={rocketObject} />
    </group>
  );
}
