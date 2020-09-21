import React from 'react';

export default function Slideshow({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-slideshow'
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
      <line x1='15' y1='6' x2='15.01' y2='6' />
      <rect x='3' y='3' width='18' height='14' rx='3' />
      <path d='M3 13l4 -4a3 5 0 0 1 3 0l4 4' />
      <path d='M13 12l2 -2a3 5 0 0 1 3 0l3 3' />
      <line x1='8' y1='21' x2='8.01' y2='21' />
      <line x1='12' y1='21' x2='12.01' y2='21' />
      <line x1='16' y1='21' x2='16.01' y2='21' />
    </svg>
  );
}
