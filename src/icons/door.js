import React from 'react';

export default function Door({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-door'
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
      <path d='M14 12v.01' />
      <path d='M3 21h18' />
      <path d='M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16' />
    </svg>
  );
}
