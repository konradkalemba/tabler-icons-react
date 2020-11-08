import React from 'react';

export default function ArrowsLeft({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-left'
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
      <line x1='3' y1='7' x2='21' y2='7' />
      <path d='M6 20l-3 -3l3 -3' />
      <path d='M6 4l-3 3l3 3' />
      <line x1='3' y1='17' x2='21' y2='17' />
    </svg>
  );
}
