import React from 'react';

export default function ArrowsRight({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-right'
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
      <line x1='21' y1='17' x2='3' y2='17' />
      <path d='M18 4l3 3l-3 3' />
      <path d='M18 20l3 -3l-3 -3' />
      <line x1='21' y1='7' x2='3' y2='7' />
    </svg>
  );
}
