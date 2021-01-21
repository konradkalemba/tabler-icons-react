import React from 'react';

export default function Motorbike({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-motorbike'
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
      <circle cx='5' cy='16' r='3' />
      <circle cx='19' cy='16' r='3' />
      <path d='M7.5 14h5l4 -4h-10.5m1.5 4l4 -4' />
      <path d='M13 6h2l1.5 3l2 4' />
    </svg>
  );
}
