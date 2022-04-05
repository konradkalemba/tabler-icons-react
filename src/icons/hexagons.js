import React from 'react';

export default function Hexagons({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-hexagons'
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
      <path d='M4 18v-5l4 -2l4 2v5l-4 2z' />
      <path d='M8 11v-5l4 -2l4 2v5' />
      <path d='M12 13l4 -2l4 2v5l-4 2l-4 -2' />
    </svg>
  );
}
