import React from 'react';

export default function CircuitDiodeZener({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-circuit-diode-zener'
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
      <path d='M22 12h-6' />
      <path d='M2 12h6' />
      <path d='M8 7l8 5l-8 5z' />
      <path d='M14 7h2v10h2' />
    </svg>
  );
}
