import React from 'react';

export default function BrandMailgun({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-mailgun'
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
      <path d='M17 12a2 2 0 1 0 4 0a9 9 0 1 0 -2.987 6.697' />
      <circle cx='12' cy='12' r='5' />
      <circle cx='12' cy='12' r='1' />
      <circle cx='12' cy='12' r='1' />
    </svg>
  );
}
