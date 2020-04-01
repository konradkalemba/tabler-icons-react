import React from 'react';

export default function ZoomIn({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-zoom-in'
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
      <path stroke='none' d='M0 0h24v24H0z' />
      <circle cx='10' cy='10' r='7' />
      <line x1='7' y1='10' x2='13' y2='10' />
      <line x1='10' y1='7' x2='10' y2='13' />
      <line x1='21' y1='21' x2='15' y2='15' />
    </svg>
  );
}
