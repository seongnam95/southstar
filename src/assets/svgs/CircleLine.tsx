import { SVGProps } from 'react';

export function CircleLine({ className }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 100 100' className={className} fill='none'>
      <circle
        cx='50.7'
        cy='50'
        r='49'
        stroke='url(#circleLineGradient)'
        strokeWidth='1'
        vectorEffect='non-scaling-stroke'
      />

      <defs>
        <linearGradient id='circleLineGradient' gradientUnits='userSpaceOnUse'>
          <stop offset='70%' stopColor='#616161' stopOpacity='0.1' />
          <stop offset='90%' stopColor='#616161' stopOpacity='0.3' />
          <stop offset='100%' stopColor='#FFFFFF' stopOpacity='0.6' />
        </linearGradient>
      </defs>
    </svg>
  );
}
