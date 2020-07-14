import React from 'react';

export default function Social({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-social'
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
      <circle cx='12' cy='5' r='2' />
      <circle cx='5' cy='19' r='2' />
      <circle cx='19' cy='19' r='2' />
      <circle cx='12' cy='14' r='3' />
      <line x1='12' y1='7' x2='12' y2='11' />
      <path d='M6.7 17.8l2.8 -2' />
      <path d='M17.3 17.8l-2.8 -2' />
    </svg>
  );
}
