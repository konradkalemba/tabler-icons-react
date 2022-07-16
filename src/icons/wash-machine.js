import React from 'react';

export default function WashMachine({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-wash-machine'
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
      <rect x='5' y='3' width='14' height='18' rx='2' />
      <circle cx='12' cy='14' r='4' />
      <path d='M8 6h.01' />
      <path d='M11 6h.01' />
      <path d='M14 6h2' />
      <path d='M8 14c1.333 -.667 2.667 -.667 4 0c1.333 .667 2.667 .667 4 0' />
    </svg>
  );
}
