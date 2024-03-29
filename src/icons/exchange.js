import React from 'react';

export default function Exchange({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-exchange'
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
      <circle cx='5' cy='18' r='2' />
      <circle cx='19' cy='6' r='2' />
      <path d='M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3' />
      <path d='M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3' />
    </svg>
  );
}
