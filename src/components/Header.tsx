'use client';

import { motion } from 'framer-motion';
import { Logo } from '@/assets/svgs/Logo';
import { IntroLine } from '@/assets/svgs/IntroLine';
import NoiseImage from '@/assets/images/noise.webp';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

export function Header() {
  const observerRef = useRef<HTMLDivElement>(null);

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFixed(!entry.isIntersecting),
      {
        threshold: 0,
        rootMargin: '-1px 0px 0px 0px',
      }
    );

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className='pt-[20rem]'>
      <div ref={observerRef} className='h-[1px] w-full' />

      {/* 배경 이펙트 */}
      <div className='absolute top-[8rem] left-1/2 h-[34rem] -translate-x-1/2'>
        {/* 이미지, 그라디언트 */}
        <div className='relative left-1/2 size-[34rem] -translate-x-1/2 overflow-hidden rounded-full'>
          <Image src={NoiseImage} alt='noise-texture-image' />
          <div className='via-background to-background absolute inset-0 size-full rounded-full bg-radial-[at_50%_50%] from-transparent via-60% to-100%' />
        </div>

        {/* 블러 */}
        <motion.div
          className='bg-foreground-muted absolute top-1/2 left-1/2 size-[34rem] -translate-1/2 rounded-full blur-3xl'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: isFixed ? 0 : 0.13 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeInOut' }}
        />
      </div>

      {/* 헤더 */}
      <motion.div
        className={cn(
          'absolute z-50 flex w-full items-center justify-center',
          isFixed && 'mask-linear-to-bottom fixed top-0 backdrop-blur-sm'
        )}
        animate={{ height: isFixed ? '6rem' : 'auto' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* 라인 */}
        <motion.div
          className='absolute w-screen'
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: isFixed ? 0 : 1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <IntroLine className='w-full' />
        </motion.div>

        {/* 로고 */}

        <motion.a
          href='#top'
          className='w-[18rem] max-sm:w-[12rem]'
          initial={{ y: 70, scale: 1, opacity: 1 }}
          animate={{
            y: 0,
            scale: isFixed ? 0.2 : 1,
            opacity: isFixed ? 0.8 : 1,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Logo />
        </motion.a>
      </motion.div>
    </div>
  );
}
