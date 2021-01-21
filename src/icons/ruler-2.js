import React from 'react';

export default function Ruler2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-ruler-2'
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
      <path d='M17 3l4 4l-14 14l-4 -4z' />
      <path d='M16 7l-1.5 -1.5' />
      <path d='M13 10l-1.5 -1.5' />
      <path d='M10 13l-1.5 -1.5' />
      <path d='M7 16l-1.5 -1.5' />
    </svg>
  );
}
