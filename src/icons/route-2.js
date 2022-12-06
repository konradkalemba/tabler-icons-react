import React from 'react';

export default function Route2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-route-2'
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
      <path d='M3 17l4 4' />
      <path d='M7 17l-4 4' />
      <path d='M17 3l4 4' />
      <path d='M21 3l-4 4' />
      <path d='M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2' />
    </svg>
  );
}
