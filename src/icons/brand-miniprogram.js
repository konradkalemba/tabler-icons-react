import React from 'react';

export default function BrandMiniprogram({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-miniprogram'
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
      <path d='M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z' />
      <path d='M7.996 11.503a2.5 2.5 0 1 0 4.004 1.997v-3a2.5 2.5 0 1 1 3.995 2.004' />
    </svg>
  );
}
