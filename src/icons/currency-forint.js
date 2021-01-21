import React from 'react';

export default function CurrencyForint({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-currency-forint'
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
      <path d='M11 4h-4a3 3 0 0 0 -3 3v12' />
      <path d='M10 11h-6' />
      <path d='M16 4v13a2 2 0 0 0 2 2h2' />
      <path d='M19 9h-5' />
    </svg>
  );
}
