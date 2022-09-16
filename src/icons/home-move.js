import React from 'react';

export default function HomeMove({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-home-move'
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
      <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2' />
      <path d='M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5' />
      <path d='M16 19h6' />
      <path d='M19 16l3 3l-3 3' />
    </svg>
  );
}