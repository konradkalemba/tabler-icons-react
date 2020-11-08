import React from 'react';

export default function ArrowsDown({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-down'
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
      <line x1='7' y1='21' x2='7' y2='3' />
      <path d='M20 18l-3 3l-3 -3' />
      <path d='M4 18l3 3l3 -3' />
      <line x1='17' y1='21' x2='17' y2='3' />
    </svg>
  );
}
