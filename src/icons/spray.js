import React from 'react';

export default function Spray({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-spray'
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
      <rect x='4' y='10' width='8' height='11' rx='2' />
      <path d='M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4' />
      <path d='M15 7h.01' />
      <path d='M18 9h.01' />
      <path d='M18 5h.01' />
      <path d='M21 3h.01' />
      <path d='M21 7h.01' />
      <path d='M21 11h.01' />
      <path d='M10 7h1' />
    </svg>
  );
}
