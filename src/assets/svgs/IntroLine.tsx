import { SVGProps } from 'react';

export function IntroLine({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height='1px'
      className={className}
      preserveAspectRatio='none'
      {...props}
    >
      <defs>
        <linearGradient
          id='introLineGradientLeft'
          gradientUnits='userSpaceOnUse'
          x1='0%'
          y1='0%'
          x2='50%'
          y2='0%'
        >
          <stop offset='0%' stopColor='#FFFFFF' stopOpacity='0.1' />
          <stop offset='100%' stopColor='#FFFFFF' stopOpacity='0.5' />
        </linearGradient>

        <linearGradient
          id='introLineGradientRight'
          gradientUnits='userSpaceOnUse'
          x1='0%'
          y1='0%'
          x2='100%'
          y2='0%'
        >
          <stop offset='0%' stopColor='#ffffff' stopOpacity='0' />
          <stop offset='100%' stopColor='#ffffff' stopOpacity='0.7' />
        </linearGradient>
      </defs>

      <line
        x1='0'
        y1='0.5'
        x2='50%'
        y2='0.5'
        stroke='url(#introLineGradientLeft)'
        strokeWidth='1'
        strokeDasharray='4,4'
        vectorEffect='non-scaling-stroke'
      />

      <line
        x1='50%'
        y1='0.5'
        x2='100%'
        y2='0.5'
        stroke='url(#introLineGradientRight)'
        strokeWidth='1'
        vectorEffect='non-scaling-stroke'
      />
    </svg>
  );
}
