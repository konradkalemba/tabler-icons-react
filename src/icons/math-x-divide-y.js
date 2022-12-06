import React from 'react';

export default function MathXDivideY({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-math-x-divide-y'
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
      <path d='M9 3l6 6' />
      <path d='M9 9l6 -6' />
      <path d='M9 15l3 4.5' />
      <path d='M15 15l-4.5 7' />
      <path d='M5 12h14' />
    </svg>
  );
}
