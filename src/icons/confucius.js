import React from 'react';

export default function Confucius({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-confucius'
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
      <path d='M9 19l3 2v-18' />
      <path d='M4 10l8 -2' />
      <path d='M4 18l8 -10' />
      <path d='M20 18l-8 -8l8 -4' />
    </svg>
  );
}
