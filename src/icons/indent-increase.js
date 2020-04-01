import React from 'react';

export default function IndentIncrease({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-indent-increase'
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
      <line x1='20' y1='6' x2='9' y2='6' />
      <line x1='20' y1='12' x2='13' y2='12' />
      <line x1='20' y1='18' x2='9' y2='18' />
      <path d='M4 8l4 4l-4 4' />
    </svg>
  );
}
