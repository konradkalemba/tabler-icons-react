import React from 'react';

export default function Soup({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-soup'
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
      <path d='M3 19h18' />
      <path d='M3 11h18a8 8 0 0 1 -8 8h-2a8 8 0 0 1 -8 -8z' />
      <path d='M9 8v-3' />
      <path d='M12 5v3' />
      <path d='M15 5v3' />
    </svg>
  );
}
