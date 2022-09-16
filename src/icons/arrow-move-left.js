import React from 'react';

export default function ArrowMoveLeft({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-move-left'
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
      <path d='M13 12h-10' />
      <path d='M6 15l-3 -3l3 -3' />
      <path d='M17 12a2 2 0 1 1 4 0a2 2 0 0 1 -4 0z' />
    </svg>
  );
}
