import React from 'react';

export default function Wind({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-wind'
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
      <path d='M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24' />
      <path d='M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24' />
      <path d='M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24' />
    </svg>
  );
}
