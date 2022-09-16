import React from 'react';

export default function ArrowsDiff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-diff'
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
      <path d='M11 16h10' />
      <path d='M11 16l4 4' />
      <path d='M11 16l4 -4' />
      <path d='M13 8h-10' />
      <path d='M13 8l-4 4' />
      <path d='M13 8l-4 -4' />
    </svg>
  );
}
