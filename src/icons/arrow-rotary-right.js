import React from 'react';

export default function ArrowRotaryRight({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-rotary-right'
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
      <path d='M17 11l4 -4l-4 -4' />
      <path d='M11 7h10' />
    </svg>
  );
}
