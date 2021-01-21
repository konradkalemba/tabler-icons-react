import React from 'react';

export default function CurrencyDollarAustralian({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-currency-dollar-australian'
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
      <path d='M3 18l3.279 -11.476a0.75 .75 0 0 1 1.442 0l3.279 11.476' />
      <path d='M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4' />
      <path d='M17 20v-2' />
      <path d='M18 6v-2' />
      <path d='M4.5 14h5' />
    </svg>
  );
}
