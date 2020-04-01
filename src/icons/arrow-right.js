import React from 'react';

export default function ArrowRight({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-right'
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
      <line x1='5' y1='12' x2='19' y2='12' />
      <line x1='13' y1='18' x2='19' y2='12' />
      <line x1='13' y1='6' x2='19' y2='12' />
    </svg>
  );
}
