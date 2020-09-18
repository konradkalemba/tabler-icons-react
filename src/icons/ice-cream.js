import React from 'react';

export default function IceCream({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-ice-cream'
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
      <line x1='4' y1='20' x2='8' y2='16' />
      <line x1='5' y1='13' x2='11' y2='19' />
      <path d='M11 19l7 -7a4 4 0 0 0 -6 -6l-7 7' />
    </svg>
  );
}
