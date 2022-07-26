import React from 'react';

export default function CircuitCapacitorPolarized({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-circuit-capacitor-polarized'
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
      <path d='M22 12h-8' />
      <path d='M2 12h8' />
      <path d='M10 7v10' />
      <path d='M14 7v10' />
      <path d='M17 5h4' />
      <path d='M19 3v4' />
    </svg>
  );
}
