import React from 'react';

export default function Hierarchy2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-hierarchy-2'
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
      <path d='M10 3h4v4h-4z' />
      <path d='M3 17h4v4h-4z' />
      <path d='M17 17h4v4h-4z' />
      <path d='M7 17l5 -4l5 4' />
      <line x1='12' y1='7' x2='12' y2='13' />
    </svg>
  );
}
