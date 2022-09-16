import React from 'react';

export default function CurrencyRufiyaa({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-currency-rufiyaa'
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
      <path d='M20 16h.01' />
      <path d='M4 16c9.5 -4 11.5 -8 14 -9' />
      <path d='M12 8l5 3' />
    </svg>
  );
}
