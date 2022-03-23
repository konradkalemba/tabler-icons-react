import React from 'react';

export default function ArrowRotaryFirstRight({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-rotary-first-right'
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
      <circle cx='8' cy='7' r='3' />
      <path d='M8 10v10' />
      <path d='M10.5 9.5l8.5 8.5' />
      <path d='M14 18h5v-5' />
    </svg>
  );
}
