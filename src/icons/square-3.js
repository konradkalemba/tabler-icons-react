import React from 'react';

export default function Square3({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-square-3'
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
      <path d='M12 12a2 2 0 1 0 -2 -2' />
      <path d='M10 14a2 2 0 1 0 2 -2' />
      <rect x='4' y='4' width='16' height='16' rx='2' />
    </svg>
  );
}
