import React from 'react';

export default function SortAscendingLetters({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-sort-ascending-letters'
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
      <path d='M15 10v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4' />
      <path d='M19 21h-4l4 -7h-4' />
      <path d='M4 15l3 3l3 -3' />
      <path d='M7 6v12' />
    </svg>
  );
}
