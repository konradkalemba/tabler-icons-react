import React from 'react';

export default function CircuitBattery({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-circuit-battery'
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
      <path d='M2 12h4' />
      <path d='M18 12h4' />
      <path d='M18 5v14' />
      <path d='M14 9v6' />
      <path d='M10 5v14' />
      <path d='M6 9v6' />
    </svg>
  );
}
