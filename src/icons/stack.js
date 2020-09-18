import React from 'react';

export default function Stack({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-stack'
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
      <polyline points='12 4 4 8 12 12 20 8 12 4' />
      <polyline points='4 12 12 16 20 12' />
      <polyline points='4 16 12 20 20 16' />
    </svg>
  );
}
