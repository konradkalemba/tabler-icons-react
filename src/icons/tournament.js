import React from 'react';

export default function Tournament({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-tournament'
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
      <path d='M5 6h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3' />
      <path d='M5 14h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3' />
      <path d='M9 8h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4' />
      <line x1='14' y1='12' x2='19' y2='12' />
    </svg>
  );
}
