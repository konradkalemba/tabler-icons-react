import React from 'react';

export default function Stack3({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-stack-3'
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
      <path d='M12 2l-8 4l8 4l8 -4l-8 -4' />
      <path d='M4 10l8 4l8 -4' />
      <path d='M4 18l8 4l8 -4' />
      <path d='M4 14l8 4l8 -4' />
    </svg>
  );
}
