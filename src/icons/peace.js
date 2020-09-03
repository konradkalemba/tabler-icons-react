import React from 'react';

export default function Peace({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-peace'
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
      <circle cx='12' cy='12' r='9' />
      <line x1='12' y1='3' x2='12' y2='21' />
      <line x1='12' y1='12' x2='18.3' y2='18.3' />
      <line x1='12' y1='12' x2='5.7' y2='18.3' />
    </svg>
  );
}