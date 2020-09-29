import React from 'react';

export default function Versions({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-versions'
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
      <rect x='10' y='5' width='10' height='14' rx='2' />
      <line x1='7' y1='7' x2='7' y2='17' />
      <line x1='4' y1='8' x2='4' y2='16' />
    </svg>
  );
}
