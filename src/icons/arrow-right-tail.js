import React from 'react';

export default function ArrowRightTail({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-right-tail'
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
      <path d='M18 15l3 -3l-3 -3' />
      <path d='M3 15l3 -3l-3 -3' />
      <line x1='6' y1='12' x2='21' y2='12' />
    </svg>
  );
}
