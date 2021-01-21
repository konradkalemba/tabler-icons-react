import React from 'react';

export default function CornerUpRightDouble({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-corner-up-right-double'
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
      <path d='M4 18v-6a3 3 0 0 1 3 -3h7' />
      <path d='M10 13l4 -4l-4 -4m5 8l4 -4l-4 -4' />
    </svg>
  );
}
