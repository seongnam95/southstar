'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { IntroLine } from '@/assets/svgs/IntroLine';
import { Logo } from '@/assets/svgs/Logo';
import NoiseImage from '@/assets/images/noise.webp';

export function IntroView() {
  const [isLoading, setIsLoading] = useState(false);

  // TODO: 페이지 로딩 필요 없을 시, isLoading 제거

  return (
    <div className='relative flex h-screen w-full items-center justify-center overflow-hidden'>
      {/* 배경 이펙트 */}
      <div className='relative w-[90vw] max-w-[90vh] overflow-hidden rounded-full'>
        <Image src={NoiseImage} alt='noise-texture-image' />
        <div className='via-background to-background absolute inset-0 size-full rounded-full bg-radial-[at_50%_50%] from-transparent via-60% to-100%' />
      </div>

      <div className='absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-3/4 flex-col items-center justify-center gap-12'>
        {/* 로고 */}
        <div className='mb-7 flex items-center justify-center'>
          {/* 블러 이펙트 */}
          <motion.div
            className='bg-foreground-muted absolute size-[32rem] rounded-full blur-3xl'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isLoading ? 0 : 1, opacity: isLoading ? 0 : 0.1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeInOut' }}
          />

          {/* 라인 */}
          <motion.div
            className='absolute w-screen'
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isLoading ? 0 : 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <IntroLine className='w-full' />
          </motion.div>

          <motion.div
            initial={{ y: 70 }}
            animate={{ y: isLoading ? 70 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Logo className='w-[18rem] md:scale-100' />
          </motion.div>
        </div>

        {/* 인삿말 */}
        <motion.div
          className='flex flex-col items-center justify-center select-none'
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: isLoading ? -20 : 0, opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.2, delay: 0.8 }}
        >
          <p className='text-title-32 text-nowrap'>
            안녕하세요, 한계 없는 개발자
          </p>
          <p className='text-title-48 overflow-hidden'>
            <motion.span
              className='text-primary inline-block'
              initial={{ y: '100%' }}
              animate={{ y: isLoading ? '100%' : 0 }}
              transition={{ duration: 0.14, delay: 1.4 }}
            >
              장성남
            </motion.span>
            입니다
          </p>
        </motion.div>
      </div>
    </div>
  );
}
