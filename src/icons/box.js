import React from 'react';

export default function Box({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-box'
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
      <polyline points='12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3' />
      <line x1='12' y1='12' x2='20' y2='7.5' />
      <line x1='12' y1='12' x2='12' y2='21' />
      <line x1='12' y1='12' x2='4' y2='7.5' />
    </svg>
  );
}
