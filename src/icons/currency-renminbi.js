import React from 'react';

export default function CurrencyRenminbi({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-currency-renminbi'
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
      <path d='M15 9v8a2 2 0 1 0 4 0' />
      <path d='M19 9h-14' />
      <path d='M19 5h-14' />
      <path d='M9 9v4c0 2.5 -.667 4 -2 6' />
    </svg>
  );
}
