import React from 'react';

export default function Wheelchair({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-wheelchair'
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
      <circle cx='8' cy='16' r='5' />
      <circle cx='19' cy='19' r='2' />
      <path d='M19 17a3 3 0 0 0 -3 -3h-3.4' />
      <path d='M3 3h1a2 2 0 0 1 2 2v6' />
      <path d='M6 8h11' />
      <path d='M15 8v6' />
    </svg>
  );
}
