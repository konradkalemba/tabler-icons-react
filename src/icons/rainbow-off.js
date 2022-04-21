import React from 'react';

export default function RainbowOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-rainbow-off'
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
      <path d='M22 17c0 -5.523 -4.477 -10 -10 -10c-.308 0 -.613 .014 -.914 .041m-3.208 .845a10.002 10.002 0 0 0 -5.878 9.114' />
      <path d='M11.088 11.069a6.001 6.001 0 0 0 -5.088 5.931' />
      <path d='M14 17a2 2 0 1 0 -4 0' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
