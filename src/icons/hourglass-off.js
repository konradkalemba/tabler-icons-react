import React from 'react';

export default function HourglassOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-hourglass-off'
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
      <path d='M18 18v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-2a6 6 0 0 1 6 -6' />
      <path d='M6 6a6 6 0 0 0 6 6m3.13 -.88a5.996 5.996 0 0 0 2.87 -5.12v-2a1 1 0 0 0 -1 -1h-10' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
