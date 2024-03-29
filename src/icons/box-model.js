import React from 'react';

export default function BoxModel({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-box-model'
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
      <path d='M8 8h8v8h-8z' />
      <rect x='4' y='4' width='16' height='16' rx='2' />
      <path d='M16 16l3.3 3.3' />
      <path d='M16 8l3.3 -3.3' />
      <path d='M8 8l-3.3 -3.3' />
      <path d='M8 16l-3.3 3.3' />
    </svg>
  );
}
