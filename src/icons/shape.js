import React from 'react';

export default function Shape({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-shape'
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
      <circle cx='6' cy='6' r='2' />
      <circle cx='18' cy='6' r='2' />
      <circle cx='6' cy='18' r='2' />
      <circle cx='18' cy='18' r='2' />
      <line x1='6' y1='8' x2='6' y2='16' />
      <line x1='8' y1='6' x2='16' y2='6' />
      <line x1='8' y1='18' x2='16' y2='18' />
      <line x1='18' y1='8' x2='18' y2='16' />
    </svg>
  );
}
