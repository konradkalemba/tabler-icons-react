import React from 'react';

export default function MathYPlusY({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-math-y-plus-y'
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
      <path d='M2 9l3 5.063' />
      <path d='M8 9l-4.8 9' />
      <path d='M16 9l3 5.063' />
      <path d='M22 9l-4.8 9' />
      <path d='M10 12h4' />
      <path d='M12 10v4' />
    </svg>
  );
}
