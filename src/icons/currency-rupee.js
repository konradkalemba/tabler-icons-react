import React from 'react';

export default function CurrencyRupee({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-currency-rupee'
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
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M18 6h-11h3a4 4 0 0 1 0 8h-3l6 6' />
      <line x1='7' y1='10' x2='18' y2='10' />
    </svg>
  );
}
