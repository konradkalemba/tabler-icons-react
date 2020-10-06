import React from 'react';

export default function RelationOneToOne({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-relation-one-to-one'
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
      <rect x='3' y='5' width='18' height='14' rx='2' />
      <path d='M8 10h1v4' />
      <path d='M15 10h1v4' />
      <line x1='12' y1='10.5' x2='12' y2='10.51' />
      <line x1='12' y1='13.5' x2='12' y2='13.51' />
    </svg>
  );
}
