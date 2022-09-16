import React from 'react';

export default function ThreeDRotate({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-3d-rotate'
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
      <path d='M11 4a7 7 0 0 1 7 7v4l-3 -3' />
      <path d='M21 12l-3 3' />
      <path d='M7 15l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z' />
      <path d='M3 12.5v4.5l4 2.5' />
      <path d='M7 15l4 -2.5' />
    </svg>
  );
}
