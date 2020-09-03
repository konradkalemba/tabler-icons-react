import React from 'react';

export default function BrandFigma({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-figma'
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
      <circle cx='15' cy='12' r='3' />
      <rect x='6' y='3' width='12' height='6' rx='3' />
      <path d='M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15' />
    </svg>
  );
}