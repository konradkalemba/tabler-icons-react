import React from 'react';

export default function CurrencyBahraini({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-currency-bahraini'
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
      <path d='M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3' />
      <path d='M7 19.01v-.01' />
      <path d='M14 15.01v-.01' />
      <path d='M17 15h2.004a2 2 0 0 0 1.649 -3.131l-2.653 -3.869' />
    </svg>
  );
}
