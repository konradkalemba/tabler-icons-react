import React from 'react';

export default function Ladder({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-ladder'
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
      <path d='M8 3v18' />
      <path d='M16 3v18' />
      <path d='M8 14h8' />
      <path d='M8 10h8' />
      <path d='M8 6h8' />
      <path d='M8 18h8' />
    </svg>
  );
}
