import React from 'react';

export default function Cut({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-cut'
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
      <circle cx='7' cy='17' r='3' />
      <circle cx='17' cy='17' r='3' />
      <line x1='9.15' y1='14.85' x2='18' y2='4' />
      <line x1='6' y1='4' x2='14.85' y2='14.85' />
    </svg>
  );
}
