import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { CircleLine } from '@/assets/svgs/CircleLine';

interface CircleTabBarProps {
  className?: string;
  labels?: string[];
  labelGap?: number;
  labelOffset?: number;
  selectedIndex?: number;
  onClick?: (index: number) => void;
}

export function CircleTabBar({
  className,
  labels,
  labelGap = 12,
  labelOffset = 14,
  selectedIndex = 0,
  onClick,
}: CircleTabBarProps) {
  const radius = 800;

  return (
    <aside className={className}>
      <div className='relative h-screen w-[22rem] overflow-hidden'>
        <div className='absolute top-1/2 right-0 -translate-y-1/2'>
          <div className='relative mr-[10rem] size-[160rem]'>
            {/* 원 */}
            <CircleLine />

            {/* 포인트 */}
            <div className='bg-foreground-accent absolute top-1/2 right-0 size-[0.9rem] -translate-y-1/2 rounded-full shadow-white' />

            {/* 라벨 */}
            <motion.div
              className='absolute inset-0 select-none'
              animate={{ rotate: -(selectedIndex * labelGap) }}
              transition={{ type: 'spring', stiffness: 70, damping: 10 }}
            >
              {labels?.map((label, i) => {
                const angle = i * labelGap;
                const radian = angle * (Math.PI / 180);

                const x = (radius + labelOffset) * Math.cos(radian);
                const y = (radius + labelOffset) * Math.sin(radian);

                const transform = `translate(${radius + x}px, ${radius + y}px) rotate(${selectedIndex * labelGap}deg)`;

                return (
                  <motion.span
                    key={label}
                    tabIndex={0}
                    className='absolute size-0'
                    initial={{ transform }}
                    animate={{ transform }}
                    transition={{ type: 'spring', stiffness: 70, damping: 10 }}
                  >
                    <button
                      type='button'
                      className={cn(
                        'absolute top-1/2 -translate-y-1/2 cursor-pointer px-2 py-1 whitespace-nowrap transition-colors duration-200',
                        i === selectedIndex
                          ? 'text-foreground-accent'
                          : 'text-foreground-subtle'
                      )}
                      onClick={() => onClick?.(i)}
                    >
                      {label}
                    </button>
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </aside>
  );
}
