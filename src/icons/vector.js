import React from 'react';

export default function Vector({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-vector'
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
      <rect x='3' y='3' width='4' height='4' rx='1' />
      <rect x='17' y='3' width='4' height='4' rx='1' />
      <rect x='17' y='17' width='4' height='4' rx='1' />
      <rect x='3' y='17' width='4' height='4' rx='1' />
      <line x1='5' y1='7' x2='5' y2='17' />
      <line x1='19' y1='7' x2='19' y2='17' />
      <line x1='7' y1='5' x2='17' y2='5' />
      <line x1='7' y1='19' x2='17' y2='19' />
    </svg>
  );
}
