import React from 'react';

export default function Mars({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-mars'
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
      <circle cx='10' cy='14' r='5' />
      <line x1='19' y1='5' x2='13.6' y2='10.4' />
      <path d='M19 5h-5' />
      <line x1='19' y1='5' x2='19' y2='10' />
    </svg>
  );
}
