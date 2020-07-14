import React from 'react';

export default function Tractor({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-tractor'
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
      <circle cx='7' cy='15' r='4' />
      <line x1='7' y1='15' x2='7' y2='15.01' />
      <circle cx='19' cy='17' r='2' />
      <path d='M10.5 17h6.5' />
      <path d='M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5' />
      <path d='M18 5h-1a1 1 0 0 0 -1 1v4' />
    </svg>
  );
}
