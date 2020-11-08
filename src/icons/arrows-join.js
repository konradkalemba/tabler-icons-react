import React from 'react';

export default function ArrowsJoin({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-join'
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
      <path d='M3 7h5l3.5 5h9.5' />
      <path d='M3 17h5l3.495 -5' />
      <path d='M18 15l3 -3l-3 -3' />
    </svg>
  );
}
