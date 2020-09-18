import React from 'react';

export default function SkipBack({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-skip-back'
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
      <path d='M20 18v-12a2 2 0 0 0 -2.75 -1.84l-8.25 6.1a2 2 0 0 0 0 3.5l8.25 6.1a2 2 0 0 0 2.75 -1.75' />
      <path d='M4 20v-16' />
    </svg>
  );
}
