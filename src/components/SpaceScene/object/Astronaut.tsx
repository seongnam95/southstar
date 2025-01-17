import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useAnimations } from '@react-three/drei';

interface AstronautProps {
  nodes: Record<string, THREE.Object3D>;
  animations: THREE.AnimationClip[];
}

export function Astronaut({ nodes, animations }: AstronautProps) {
  const group = useRef<THREE.Group>(null);
  const { actions } = useAnimations(animations, group);

  const astronautObject = nodes.ArmatureAstronaut;
  const notebookObject = nodes.MeshNoteBook;

  useEffect(() => {
    const displayMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#100045'),
      emissive: new THREE.Color('#0c0236'),
      emissiveIntensity: 4,
      toneMapped: false,
    });

    notebookObject.traverse((child: THREE.Object3D) => {
      if (child.name === 'MeshNoteBook_2' && child instanceof THREE.Mesh) {
        child.material = displayMaterial.clone();
      }
    });

    const action = actions.AstronautAnimation;
    if (action) action.reset().fadeIn(0.5).play();

    return () => {
      if (action) action.fadeOut(0.5);
    };
  }, [actions, astronautObject, notebookObject]);

  return (
    <group ref={group}>
      <primitive object={astronautObject} />
      <primitive object={notebookObject} />
    </group>
  );
}
