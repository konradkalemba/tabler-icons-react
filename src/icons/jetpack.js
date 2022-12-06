import React from 'react';

export default function Jetpack({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-jetpack'
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
      <path d='M10 6a3 3 0 1 0 -6 0v7h6v-7z' />
      <path d='M14 13h6v-7a3 3 0 0 0 -6 0v7z' />
      <path d='M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5' />
      <path d='M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5' />
      <path d='M10 8h4' />
      <path d='M10 11h4' />
    </svg>
  );
}
