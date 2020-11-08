import React from 'react';

export default function ArrowTopCircle({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-top-circle'
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
      <line x1='12' y1='17' x2='12' y2='3' />
      <path d='M15 6l-3 -3l-3 3' />
      <circle cx='12' cy='19' r='2' />
    </svg>
  );
}
