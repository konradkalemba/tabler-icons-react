import React from 'react';

export default function Book({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-book'
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
      <path d='M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0' />
      <path d='M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0' />
      <line x1='3' y1='6' x2='3' y2='19' />
      <line x1='12' y1='6' x2='12' y2='19' />
      <line x1='21' y1='6' x2='21' y2='19' />
    </svg>
  );
}
