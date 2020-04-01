import React from 'react';

export default function Eye({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-eye'
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
      <circle cx='12' cy='12' r='2' />
      <path d='M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2' />
      <path d='M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2' />
    </svg>
  );
}
