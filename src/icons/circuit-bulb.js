import React from 'react';

export default function CircuitBulb({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-circuit-bulb'
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
      <path d='M2 12h5' />
      <path d='M17 12h5' />
      <circle cx='12' cy='12' r='5' />
      <path d='M8.5 8.5l7 7' />
      <path d='M15.5 8.5l-7 7' />
    </svg>
  );
}
