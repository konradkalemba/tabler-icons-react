import React from 'react';

export default function ArrowsDiagonal2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-diagonal-2'
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
      <polyline points='16 20 20 20 20 16' />
      <line x1='14' y1='14' x2='20' y2='20' />
      <polyline points='8 4 4 4 4 8' />
      <line x1='4' y1='4' x2='10' y2='10' />
    </svg>
  );
}
