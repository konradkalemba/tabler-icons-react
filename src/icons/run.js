import React from 'react';

export default function Run({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-run'
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
      <circle cx='13' cy='4' r='1' />
      <path d='M4 17l5 1l.75 -1.5' />
      <path d='M15 21l0 -4l-4 -3l1 -6' />
      <path d='M7 12l0 -3l5 -1l3 3l3 1' />
    </svg>
  );
}
