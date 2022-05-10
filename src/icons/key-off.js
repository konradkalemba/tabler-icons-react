import React from 'react';

export default function KeyOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-key-off'
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
      <circle cx='8' cy='15' r='4' />
      <path d='M10.85 12.15l.65 -.65m2 -2l5.5 -5.5' />
      <path d='M18 5l2 2' />
      <path d='M15 8l2 2' />
      <path d='M3 3l18 18' />
    </svg>
  );
}