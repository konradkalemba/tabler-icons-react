import React from 'react';

export default function ArrowsDiagonalMinimize2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-diagonal-minimize-2'
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
      <path d='M18 10h-4v-4' />
      <path d='M20 4l-6 6' />
      <path d='M6 14h4v4' />
      <path d='M10 14l-6 6' />
    </svg>
  );
}
