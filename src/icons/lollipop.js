import React from 'react';

export default function Lollipop({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-lollipop'
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
      <circle cx='14' cy='10' r='7' />
      <path d='M21 10a3.5 3.5 0 0 0 -7 0' />
      <path d='M14 10a3.5 3.5 0 0 1 -7 0' />
      <path d='M14 17a3.5 3.5 0 0 0 0 -7' />
      <path d='M14 3a3.5 3.5 0 0 0 0 7' />
      <path d='M3 21l6 -6' />
    </svg>
  );
}
