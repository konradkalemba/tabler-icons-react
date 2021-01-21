import React from 'react';

export default function Eyeglass({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-eyeglass'
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
      <path d='M8 4h-2l-3 10' />
      <path d='M16 4h2l3 10' />
      <line x1='10' y1='16' x2='14' y2='16' />
      <path d='M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5' />
      <path d='M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5' />
    </svg>
  );
}
