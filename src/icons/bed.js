import React from 'react';

export default function Bed({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-bed'
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
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6' />
      <circle cx='7' cy='10' r='1' />
    </svg>
  );
}
