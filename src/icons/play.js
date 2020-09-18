import React from 'react';

export default function Play({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-play'
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
      <path d='M5 5 v14 a2 2 0 0 0 2.75 1.84 l12.25 -7.1 a2 2 0 0 0 0 -3.5 l-12.25 -7.1 a2 2 0 0 0 -2.75 1.75' />
    </svg>
  );
}
