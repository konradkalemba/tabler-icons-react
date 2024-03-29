import React from 'react';

export default function HomeSignal({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-home-signal'
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
      <path d='M15 22v-2' />
      <path d='M18 22v-4' />
      <path d='M21 22v-6' />
      <path d='M19 12.494v-.494h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4' />
      <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v.5' />
    </svg>
  );
}
