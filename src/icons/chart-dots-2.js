import React from 'react';

export default function ChartDots2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-chart-dots-2'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      stroke={color}
      strokeWidth='2'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...restProps}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M3 3v18h18' />
      <circle cx='9' cy='15' r='2' />
      <circle cx='13' cy='5' r='2' />
      <circle cx='18' cy='12' r='2' />
      <path d='M21 3l-6 1.5' />
      <path d='M14.113 6.65l2.771 3.695' />
      <path d='M16 12.5l-5 2' />
    </svg>
  );
}
