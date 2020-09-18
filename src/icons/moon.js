import React from 'react';

export default function Moon({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-moon'
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
      <path d='m 12 3 c 0.132 0 0.263 0.003 0.393 0.008 a7.5 7.5 0 0 0 7.92 12.446 a9 9 0 1 1 -8.313 -12.454 z' />
    </svg>
  );
}
