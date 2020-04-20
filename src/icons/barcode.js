import React from 'react';

export default function Barcode({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-barcode'
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
      <path d='M4 7v-1a2 2 0 0 1 2 -2h2' />
      <path d='M4 17v1a2 2 0 0 0 2 2h2' />
      <path d='M16 4h2a2 2 0 0 1 2 2v1' />
      <path d='M16 20h2a2 2 0 0 0 2 -2v-1' />
      <rect x='5' y='11' width='1' height='2' />
      <line x1='10' y1='11' x2='10' y2='13' />
      <rect x='14' y='11' width='1' height='2' />
      <line x1='19' y1='11' x2='19' y2='13' />
    </svg>
  );
}
