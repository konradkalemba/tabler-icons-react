import React from 'react';

export default function Yoga({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-yoga'
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
      <circle cx='12' cy='4' r='1' />
      <path d='M4 20h4l1.5 -3' />
      <path d='M17 20l-1 -5h-5l1 -7' />
      <path d='M4 10l4 -1l4 -1l4 1.5l4 1.5' />
    </svg>
  );
}
