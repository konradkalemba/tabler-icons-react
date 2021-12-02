import React from 'react';

export default function AxisY({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-axis-y'
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
      <path d='M11 20h-.01' />
      <path d='M15 20h-.01' />
      <path d='M19 20h-.01' />
      <path d='M4 7l3 -3l3 3' />
      <path d='M7 20v-16' />
    </svg>
  );
}
