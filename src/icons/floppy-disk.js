import React from 'react';

export default function FloppyDisk({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-floppy-disk'
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
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M18 20h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9l5 5v9a2 2 0 0 1 -2 2' />
      <circle cx='12' cy='13' r='2' />
      <polyline points='4 8 10 8 10 4' />
    </svg>
  );
}
