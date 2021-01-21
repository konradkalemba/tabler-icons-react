import React from 'react';

export default function ListSearch({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-list-search'
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
      <circle cx='15' cy='15' r='4' />
      <path d='M18.5 18.5l2.5 2.5' />
      <path d='M4 6h16' />
      <path d='M4 12h4' />
      <path d='M4 18h4' />
    </svg>
  );
}
