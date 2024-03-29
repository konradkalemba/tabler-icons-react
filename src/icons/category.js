import React from 'react';

export default function Category({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-category'
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
      <path d='M4 4h6v6h-6z' />
      <path d='M14 4h6v6h-6z' />
      <path d='M4 14h6v6h-6z' />
      <circle cx='17' cy='17' r='3' />
    </svg>
  );
}
