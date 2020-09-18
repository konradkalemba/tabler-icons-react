import React from 'react';

export default function H6({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-h-6'
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
      <line x1='3' y1='5' x2='3' y2='19' />
      <line x1='3' y1='12' x2='12' y2='12' />
      <line x1='12' y1='5' x2='12' y2='19' />
      <circle cx='18.5' cy='16.5' r='2.5' />
      <line x1='20' y1='9' x2='16.5' y2='15' />
    </svg>
  );
}
