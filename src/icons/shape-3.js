import React from 'react';

export default function Shape3({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-shape-3'
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
      <circle cx='5' cy='5' r='2' />
      <circle cx='19' cy='19' r='2' />
      <circle cx='19' cy='5' r='2' />
      <circle cx='5' cy='19' r='2' />
      <path d='M7 5h10m-12 2v10m14 -10v10' />
    </svg>
  );
}
