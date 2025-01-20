import { cn } from '@/lib/cn';
import { SVGProps } from 'react';

export function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 180 90'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('drop-shadow-[0_0_14px_rgba(255,255,255,0.3)]', className)}
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M73.0781 13.1802C56.3605 -4.39339 29.2559 -4.39341 12.5382 13.1802C-4.17941 30.7538 -4.17941 59.2462 12.5382 76.8198C29.2558 94.3934 56.3604 94.3934 73.0781 76.8198L90 59.0314L106.922 76.8198C123.64 94.3934 150.744 94.3934 167.462 76.8198C184.179 59.2462 184.179 30.7538 167.462 13.1802C150.744 -4.39341 123.64 -4.39339 106.922 13.1802L90 30.9685L73.0781 13.1802ZM103.348 45L120.27 27.2115C129.616 17.3872 144.768 17.3872 154.114 27.2115C163.46 37.0358 163.46 52.9642 154.114 62.7885C144.768 72.6128 129.616 72.6128 120.27 62.7885L103.348 45ZM76.6521 44.9999L59.7302 27.2115C50.3844 17.3872 35.2319 17.3872 25.8861 27.2115C16.5403 37.0358 16.5403 52.9642 25.8861 62.7885C35.2319 72.6128 50.3844 72.6128 59.7302 62.7885L76.6521 44.9999Z'
        fill='url(#logoGradient)'
      />
      <defs>
        <linearGradient
          id='logoGradient'
          x1='6.03245e-06'
          y1='12.1118'
          x2='180'
          y2='77.8882'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='white' />
          <stop offset='0.43' stopColor='#E5E5E5' />
          <stop offset='1' stopColor='#C3C3C3' />
        </linearGradient>
      </defs>
    </svg>
  );
}
