import React from 'react';

export default function BrandInstagram({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-instagram'
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
      <rect x='4' y='4' width='16' height='16' rx='4' />
      <circle cx='12' cy='12' r='3' />
      <line x1='16.5' y1='7.5' x2='16.5' y2='7.501' />
    </svg>
  );
}