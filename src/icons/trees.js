import React from 'react';

export default function Trees({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-trees'
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
      <rect x='4' y='3' width='8' height='14' rx='4' />
      <rect x='12' y='7' width='8' height='10' rx='3' />
      <line x1='8' y1='21' x2='8' y2='13' />
      <line x1='16' y1='21' x2='16' y2='14' />
    </svg>
  );
}
