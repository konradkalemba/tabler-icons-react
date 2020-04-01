import React from 'react';

export default function Music({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-music'
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
      <circle cx='6' cy='17' r='3' />
      <circle cx='16' cy='17' r='3' />
      <polyline points='9 17 9 4 19 4 19 17' />
      <line x1='9' y1='8' x2='19' y2='8' />
    </svg>
  );
}
