import React from 'react';

export default function EPassport({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-e-passport'
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
      <rect x='2' y='5' width='20' height='14' rx='1.999' />
      <circle cx='12' cy='12' r='3' />
      <path d='M9 12h-7' />
      <path d='M15 12h7' />
    </svg>
  );
}
