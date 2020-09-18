import React from 'react';

export default function ArrowRightCircle({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-right-circle'
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
      <circle cx='12' cy='12' r='9' />
      <line x1='16' y1='12' x2='8' y2='12' />
      <line x1='16' y1='12' x2='12' y2='16' />
      <line x1='16' y1='12' x2='12' y2='8' />
    </svg>
  );
}
