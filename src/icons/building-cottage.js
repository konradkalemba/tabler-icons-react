import React from 'react';

export default function BuildingCottage({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-building-cottage'
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
      <line x1='3' y1='21' x2='21' y2='21' />
      <path d='M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11' />
      <circle cx='12' cy='9' r='2' />
      <path d='M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5' />
    </svg>
  );
}
