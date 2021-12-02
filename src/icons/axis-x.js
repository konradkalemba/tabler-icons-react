import React from 'react';

export default function AxisX({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-axis-x'
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
      <path d='M4 13v.01' />
      <path d='M4 9v.01' />
      <path d='M4 5v.01' />
      <path d='M17 20l3 -3l-3 -3' />
      <path d='M4 17h16' />
    </svg>
  );
}
