import React from 'react';

export default function CurrencyWon({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-currency-won'
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
      <path d='M4 6l3.245 11.358a0.85 .85 0 0 0 1.624 .035l3.131 -9.393l3.131 9.393a0.85 .85 0 0 0 1.624 -.035l3.245 -11.358' />
      <path d='M21 10h-18' />
      <path d='M21 14h-18' />
    </svg>
  );
}
