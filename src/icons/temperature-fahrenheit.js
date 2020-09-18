import React from 'react';

export default function TemperatureFahrenheit({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-temperature-fahrenheit'
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
      <circle cx='6' cy='8' r='2' />
      <line x1='13' y1='12' x2='18' y2='12' />
      <path d='M20 6h-6a1 1 0 0 0 -1 1v11' />
    </svg>
  );
}
