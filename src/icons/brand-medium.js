import React from 'react';

export default function BrandMedium({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-medium'
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
      <rect x='4' y='4' width='16' height='16' rx='2' />
      <path d='M8 9h1l3 3l3 -3h1' />
      <line x1='8' y1='15' x2='10' y2='15' />
      <line x1='14' y1='15' x2='16' y2='15' />
      <line x1='9' y1='9' x2='9' y2='15' />
      <line x1='15' y1='9' x2='15' y2='15' />
    </svg>
  );
}
