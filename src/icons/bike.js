import React from 'react';

export default function Bike({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-bike'
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
      <path stroke='none' d='M0 0h24v24H0z' />
      <circle cx='5' cy='18' r='3' />
      <circle cx='19' cy='18' r='3' />
      <polyline points='12 19 12 15 9 12 14 8 16 11 19 11' />
      <circle cx='17' cy='5' r='1' />
    </svg>
  );
}
