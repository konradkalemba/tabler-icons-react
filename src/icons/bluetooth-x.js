import React from 'react';

export default function BluetoothX({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-bluetooth-x'
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
      <path d='M7 8l10 8l-5 4v-16l1.003 .802m0 6.396l-6.003 4.802' />
      <path d='M16 6l4 4' />
      <path d='M20 6l-4 4' />
    </svg>
  );
}
