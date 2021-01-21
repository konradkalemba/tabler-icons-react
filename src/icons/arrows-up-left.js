import React from 'react';

export default function ArrowsUpLeft({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-up-left'
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
      <path d='M21 7l-4 -4l-4 4' />
      <path d='M17 3v11a3 3 0 0 1 -3 3h-11' />
      <path d='M7 13l-4 4l4 4' />
    </svg>
  );
}
