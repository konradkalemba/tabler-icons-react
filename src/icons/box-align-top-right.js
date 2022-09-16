import React from 'react';

export default function BoxAlignTopRight({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-box-align-top-right'
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
      <path d='M19 11.01h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1z' />
      <path d='M20 15.01v-.01' />
      <path d='M20 20.01v-.01' />
      <path d='M15 20.01v-.01' />
      <path d='M9 20.01v-.01' />
      <path d='M9 4.01v-.01' />
      <path d='M4 20.01v-.01' />
      <path d='M4 15.01v-.01' />
      <path d='M4 9.01v-.01' />
      <path d='M4 4.01v-.01' />
    </svg>
  );
}
