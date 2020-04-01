import React from 'react';

export default function BorderOuter({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-border-outer'
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
      <rect x='4' y='4' width='16' height='16' rx='2' />
      <g stroke-dasharray='.001 4'>
        <line x1='4' y1='12' x2='20' y2='12' />
        <line x1='12' y1='4' x2='12' y2='20' />
      </g>
    </svg>
  );
}
