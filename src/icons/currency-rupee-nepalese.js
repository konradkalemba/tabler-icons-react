import React from 'react';

export default function CurrencyRupeeNepalese({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-currency-rupee-nepalese'
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
      <path d='M15 5h-11h3a4 4 0 1 1 0 8h-3l6 6' />
      <path d='M21 17l-4.586 -4.414a2 2 0 0 0 -2.828 2.828l.707 .707' />
    </svg>
  );
}
