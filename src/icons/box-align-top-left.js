import React from 'react';

export default function BoxAlignTopLeft({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-box-align-top-left'
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
      <path d='M11.005 5.005v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1z' />
      <path d='M15.005 4.005h-.01' />
      <path d='M20.005 4.005h-.01' />
      <path d='M20.005 9.005h-.01' />
      <path d='M20.005 15.005h-.01' />
      <path d='M4.005 15.005h-.01' />
      <path d='M20.005 20.005h-.01' />
      <path d='M15.005 20.005h-.01' />
      <path d='M9.005 20.005h-.01' />
      <path d='M4.005 20.005h-.01' />
    </svg>
  );
}
