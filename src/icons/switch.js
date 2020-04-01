import React from 'react';

export default function Switch({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-switch'
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
      <polyline points='15 4 19 4 19 8' />
      <line x1='14.75' y1='9.25' x2='19' y2='4' />
      <line x1='5' y1='19' x2='9' y2='15' />
      <polyline points='15 19 19 19 19 15' />
      <line x1='5' y1='5' x2='19' y2='19' />
    </svg>
  );
}
