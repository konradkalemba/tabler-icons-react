import React from 'react';

export default function AntennaBarsOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-antenna-bars-off'
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
      <path d='M6 18v-3' />
      <path d='M10 18v-6' />
      <path d='M14 18v-4' />
      <path d='M18 14v-8' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
