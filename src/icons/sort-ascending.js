import React from 'react';

export default function SortAscending({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-sort-ascending'
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
      <line x1='4' y1='6' x2='11' y2='6' />
      <line x1='4' y1='12' x2='11' y2='12' />
      <line x1='4' y1='18' x2='13' y2='18' />
      <polyline points='15 9 18 6 21 9' />
      <line x1='18' y1='6' x2='18' y2='18' />
    </svg>
  );
}
