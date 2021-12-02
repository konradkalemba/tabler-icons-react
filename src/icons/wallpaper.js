import React from 'react';

export default function Wallpaper({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-wallpaper'
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
      <path d='M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12' />
      <circle cx='6' cy='18' r='2' />
      <path d='M8 18v-12a2 2 0 1 0 -4 0v12' />
    </svg>
  );
}
