import React from 'react';

export default function BrandAlpineJs({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-alpine-js'
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
      <path d='M3 11.5l4.5 4.5h9l-9 -9z' />
      <path d='M16.5 16l4.5 -4.5l-4.5 -4.5l-4.5 4.5' />
    </svg>
  );
}
