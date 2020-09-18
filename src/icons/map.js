import React from 'react';

export default function Map({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-map'
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
      <polyline points='3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7' />
      <line x1='9' y1='4' x2='9' y2='17' />
      <line x1='15' y1='7' x2='15' y2='20' />
    </svg>
  );
}
