import React from 'react';

export default function MathXDivideY2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-math-x-divide-y-2'
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
      <path d='M3 21l18 -18' />
      <path d='M15 14l3 4.5' />
      <path d='M21 14l-4.5 7' />
      <path d='M3 4l6 6' />
      <path d='M3 10l6 -6' />
    </svg>
  );
}
