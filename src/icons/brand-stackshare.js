import React from 'react';

export default function BrandStackshare({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-stackshare'
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
      <circle cx='19' cy='6' r='2' />
      <circle cx='19' cy='18' r='2' />
      <circle cx='5' cy='12' r='2' />
      <path d='M7 12h3l3.5 6h3.5' />
      <path d='M17 6h-3.5l-3.5 6' />
    </svg>
  );
}
