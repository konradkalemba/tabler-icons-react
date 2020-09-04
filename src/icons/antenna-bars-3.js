import React from 'react';

export default function AntennaBars3({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-antenna-bars-3'
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
      <path d='M6 18v-3' />
      <path d='M10 18v-6' />
      <path d='M14 18v-.01' />
      <path d='M18 18v-.01' />
    </svg>
  );
}
