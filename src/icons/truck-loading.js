import React from 'react';

export default function TruckLoading({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-truck-loading'
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
      <path d='M2 3h1a2 2 0 0 1 2 2v10a2 2 0 0 0 2 2h15' />
      <rect x='9' y='6' width='10' height='8' rx='3' />
      <circle cx='9' cy='19' r='2' />
      <circle cx='18' cy='19' r='2' />
    </svg>
  );
}
