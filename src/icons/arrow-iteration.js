import React from 'react';

export default function ArrowIteration({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-iteration'
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
      <path d='M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5' />
      <path d='M3 16h18' />
      <path d='M18 13l3 3l-3 3' />
    </svg>
  );
}
