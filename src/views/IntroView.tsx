'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';

export function IntroView() {
  const [isLoading, setIsLoading] = useState(false);

  // TODO: 페이지 로딩 필요 없을 시, isLoading 제거

  return (
    <div className='h-screen'>
      <Header />

      <motion.div
        className='absolute left-1/2 z-0 mt-36 flex -translate-x-1/2 flex-col items-center justify-center text-nowrap select-none max-sm:mt-24'
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: isLoading ? -20 : 0, opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.2, delay: 0.8 }}
      >
        <p className='max-sm:text-title-24 text-title-32'>
          안녕하세요, 한계 없는 개발자
        </p>
        <p className='max-sm:text-title-32 text-title-48 overflow-hidden'>
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
  );
}
