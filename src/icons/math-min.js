import React from 'react';

export default function MathMin({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-math-min'
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
      <path d='M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4z' />
      <path d='M3 4c0 8.75 4 14 7 14.5' />
      <path d='M14 18.5c3 -.5 7 -5.75 7 -14.5' />
    </svg>
  );
}
