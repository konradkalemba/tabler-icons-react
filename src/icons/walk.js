import React from 'react';

export default function Walk({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-walk'
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
      <circle cx='13' cy='4' r='1' />
      <line x1='7' y1='21' x2='10' y2='17' />
      <path d='M16 21l-2 -4l-3 -3l1 -6' />
      <path d='M6 12l2 -3l4 -1l3 3l3 1' />
    </svg>
  );
}
