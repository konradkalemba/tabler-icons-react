import React from 'react';

export default function Stretching({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-stretching'
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
      <circle cx='16' cy='5' r='1' />
      <path d='M5 20l5 -.5l1 -2' />
      <path d='M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2' />
    </svg>
  );
}
