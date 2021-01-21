import React from 'react';

export default function Square6({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-square-6'
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
      <circle transform='rotate(180 12 14)' cx='12' cy='14' r='2' />
      <path d='M14 10a2 2 0 1 0 -4 0v4' />
      <rect x='4' y='4' width='16' height='16' rx='2' />
    </svg>
  );
}
