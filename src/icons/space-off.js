import React from 'react';

export default function SpaceOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-space-off'
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
      <path d='M4 10v3a1 1 0 0 0 1 1h9m4 0h1a1 1 0 0 0 1 -1v-3' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
