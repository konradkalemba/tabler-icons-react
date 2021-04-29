import React from 'react';

export default function BorderStyle2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-border-style-2'
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
      <path d='M4 18v.01' />
      <path d='M8 18v.01' />
      <path d='M12 18v.01' />
      <path d='M16 18v.01' />
      <path d='M20 18v.01' />
      <path d='M18 12h2' />
      <path d='M11 12h2' />
      <path d='M4 12h2' />
      <path d='M4 6h16' />
    </svg>
  );
}
