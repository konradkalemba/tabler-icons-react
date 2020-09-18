import React from 'react';

export default function ArrowsDiagonal({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-diagonal'
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
      <polyline points='16 4 20 4 20 8' />
      <line x1='14' y1='10' x2='20' y2='4' />
      <polyline points='8 20 4 20 4 16' />
      <line x1='4' y1='20' x2='10' y2='14' />
    </svg>
  );
}
