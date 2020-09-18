import React from 'react';

export default function Layout({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-layout'
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
      <rect x='4' y='4' width='6' height='5' rx='2' />
      <rect x='4' y='13' width='6' height='7' rx='2' />
      <rect x='14' y='4' width='6' height='16' rx='2' />
    </svg>
  );
}
