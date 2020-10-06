import React from 'react';

export default function Ce({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-ce'
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
      <path d='M11 4a8 8 0 1 0 0 16' />
      <path d='M20 4a8 8 0 1 0 0 16' />
      <line x1='12' y1='12' x2='20' y2='12' />
    </svg>
  );
}
