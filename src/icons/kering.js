import React from 'react';

export default function Kering({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-kering'
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
      <path d='M16 15v-3.5a2.5 2.5 0 1 1 5 0v3.5m0 -2h-5' />
      <path d='M3 9l3 6l3 -6' />
      <path d='M9 20l6 -16' />
    </svg>
  );
}
