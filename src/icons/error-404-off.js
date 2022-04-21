import React from 'react';

export default function Error404Off({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-error-404-off'
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
      <path d='M3 7v4a1 1 0 0 0 1 1h3' />
      <path d='M7 7v10' />
      <path d='M10 10v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2m0 -4v-2a1 1 0 0 0 -1 -1h-2' />
      <path d='M17 7v4a1 1 0 0 0 1 1h3' />
      <path d='M21 7v10' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
