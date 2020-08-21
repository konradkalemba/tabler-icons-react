import React from 'react';

export default function Caravan({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-caravan'
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
      <path stroke='none' d='M0 0h24v24H0z' />
      <circle cx='11' cy='17' r='2' />
      <path d='M21 17h-8' />
      <path d='M9 17h-5a1 1 0 0 1 -1 -1v-9a2 2 0 0 1 2 -2h10l4 4v8' />
      <rect x='6' y='8' width='6' height='4' rx='1' />
    </svg>
  );
}
