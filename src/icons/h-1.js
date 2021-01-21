import React from 'react';

export default function H1({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-h-1'
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
      <path d='M19 18v-8l-2 2' />
      <path d='M4 6v12' />
      <path d='M12 6v12' />
      <path d='M11 18h2' />
      <path d='M3 18h2' />
      <path d='M4 12h8' />
      <path d='M3 6h2' />
      <path d='M11 6h2' />
    </svg>
  );
}
