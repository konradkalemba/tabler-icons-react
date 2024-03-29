import React from 'react';

export default function MilitaryRank({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-military-rank'
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
      <path d='M17 7v13h-10v-13l5 -3z' />
      <path d='M10 13l2 -1l2 1' />
      <path d='M10 17l2 -1l2 1' />
      <path d='M10 9l2 -1l2 1' />
    </svg>
  );
}
