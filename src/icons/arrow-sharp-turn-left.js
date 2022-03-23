import React from 'react';

export default function ArrowSharpTurnLeft({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-sharp-turn-left'
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
      <path d='M17 18v-11.31a0.7 .7 0 0 0 -1.195 -.495l-9.805 9.805' />
      <path d='M11 16h-5v-5' />
    </svg>
  );
}
