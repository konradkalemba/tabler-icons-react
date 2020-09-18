import React from 'react';

export default function ArrowDown({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-down'
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
      <line x1='12' y1='5' x2='12' y2='19' />
      <line x1='18' y1='13' x2='12' y2='19' />
      <line x1='6' y1='13' x2='12' y2='19' />
    </svg>
  );
}
