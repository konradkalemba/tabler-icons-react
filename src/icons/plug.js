import React from 'react';

export default function Plug({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-plug'
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
      <path d='M10 6l8 8l-2 2a5.657 5.657 0 1 1 -8 -8l2 -2z' />
      <path d='M4 20l4 -4' />
      <path d='M15 4l-3.5 3.5' />
      <path d='M20 9l-3.5 3.5' />
    </svg>
  );
}
