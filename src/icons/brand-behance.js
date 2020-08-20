import React from 'react';

export default function BrandBehance({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-behance'
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
      <path d='M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5' />
      <line x1='3' y1='12' x2='7.5' y2='12' />
      <path d='M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1' />
      <line x1='16' y1='6' x2='19' y2='6' />
    </svg>
  );
}
