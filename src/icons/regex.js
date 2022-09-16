import React from 'react';

export default function Regex({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-regex'
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
      <path d='M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z' />
      <path d='M17 7.875l3 -1.687' />
      <path d='M17 7.875v3.375' />
      <path d='M17 7.875l-3 -1.687' />
      <path d='M17 7.875l3 1.688' />
      <path d='M17 4.5v3.375' />
      <path d='M17 7.875l-3 1.688' />
    </svg>
  );
}
