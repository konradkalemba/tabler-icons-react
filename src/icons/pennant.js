import React from 'react';

export default function Pennant({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-pennant'
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
      <line x1='8' y1='21' x2='12' y2='21' />
      <line x1='10' y1='21' x2='10' y2='3' />
      <path d='M10 4l9 4-9 4' />
    </svg>
  );
}
