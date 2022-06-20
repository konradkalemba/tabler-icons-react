import React from 'react';

export default function Fridge({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-fridge'
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
      <path d='M5 10h14' />
      <path d='M9 13v3' />
      <path d='M9 6v1' />
    </svg>
  );
}
