import React from 'react';

export default function ArrowRotaryStraight({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-rotary-straight'
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
      <circle cx='13' cy='13' r='3' />
      <path d='M13 16v5' />
      <path d='M13 3v7' />
      <path d='M9 7l4 -4l4 4' />
    </svg>
  );
}
