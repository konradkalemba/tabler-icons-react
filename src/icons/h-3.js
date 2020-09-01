import React from 'react';

export default function H3({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-h-3'
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
      <line x1='3' y1='5' x2='3' y2='19' />
      <line x1='3' y1='12' x2='12' y2='12' />
      <line x1='12' y1='5' x2='12' y2='19' />
      <path d='M16 11.5a2.5 2.5 0 1 1 2.5 2.5a2.5 2.5 0 1 1 -2.5 2.5' />
    </svg>
  );
}
