import React from 'react';

export default function Spy({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-spy'
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
      <path d='M3 11h18' />
      <path d='M5 11v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4' />
      <circle cx='7' cy='17' r='3' />
      <circle cx='17' cy='17' r='3' />
      <path d='M10 17h4' />
    </svg>
  );
}
