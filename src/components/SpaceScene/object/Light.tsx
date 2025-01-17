import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Lights() {
  const mainLightRef = useRef<THREE.DirectionalLight>(null!);
  const subLightRef = useRef<THREE.DirectionalLight>(null!);
  const backgroundLightRef = useRef<THREE.HemisphereLight>(null!);

  useEffect(() => {
    // 초기 intensity를 0으로 설정
    if (mainLightRef.current) mainLightRef.current.intensity = 0;
    if (subLightRef.current) subLightRef.current.intensity = 0;
    if (backgroundLightRef.current) backgroundLightRef.current.intensity = 0;

    // 순차적으로 조명 켜기
    setTimeout(() => {
      if (backgroundLightRef.current) {
        backgroundLightRef.current.intensity = 1;
      }
    }, 500);

    setTimeout(() => {
      if (subLightRef.current) {
        subLightRef.current.intensity = 0.4;
      }
    }, 1100);

    setTimeout(() => {
      if (mainLightRef.current) {
        mainLightRef.current.intensity = 2;
      }
    }, 1400);
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />

      <directionalLight ref={mainLightRef} position={[5, 8, 5]} />
      <directionalLight ref={subLightRef} position={[-8, 5, 12]} />

      <hemisphereLight
        ref={backgroundLightRef}
        color='#ffffff'
        groundColor='#5a5a5a'
      />
    </>
  );
}
