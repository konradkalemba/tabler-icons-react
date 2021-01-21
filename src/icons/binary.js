import React from 'react';

export default function Binary({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-binary'
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
      <path d='M11 10v-5h-1m8 14v-5h-1' />
      <rect x='15' y='5' width='3' height='5' rx='.5' />
      <rect x='10' y='14' width='3' height='5' rx='.5' />
      <path d='M6 10h.01m-.01 9h.01' />
    </svg>
  );
}
