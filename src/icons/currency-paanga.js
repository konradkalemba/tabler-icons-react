import React from 'react';

export default function CurrencyPaanga({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-currency-paanga'
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
      <path d='M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4' />
      <path d='M17 20v-2' />
      <path d='M18 6v-2' />
      <path d='M3 6h8' />
      <path d='M7 6v12' />
    </svg>
  );
}
