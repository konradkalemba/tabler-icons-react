import React from 'react';

export default function BrandGmail({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-gmail'
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
      <path d='M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z' />
      <path d='M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z' />
      <path d='M16 4l-4 4l-4 -4' />
      <path d='M4 6.5l8 7.5l8 -7.5' />
    </svg>
  );
}
