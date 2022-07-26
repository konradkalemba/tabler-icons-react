import React from 'react';

export default function CircuitCellPlus({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-circuit-cell-plus'
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
      <path d='M2 12h9' />
      <path d='M15 12h7' />
      <path d='M11 5v14' />
      <path d='M15 9v6' />
      <path d='M3 5h4' />
      <path d='M5 3v4' />
    </svg>
  );
}
