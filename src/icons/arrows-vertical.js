import React from 'react';

export default function ArrowsVertical({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-vertical'
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
      <polyline points='8 7 12 3 16 7' />
      <polyline points='8 17 12 21 16 17' />
      <line x1='12' y1='3' x2='12' y2='21' />
    </svg>
  );
}
