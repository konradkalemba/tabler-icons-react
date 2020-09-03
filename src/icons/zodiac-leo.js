import React from 'react';

export default function ZodiacLeo({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-zodiac-leo'
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
      <path d='M13 17a4 4 0 1 0 8 0' />
      <circle cx='6' cy='16' r='3' />
      <circle cx='11' cy='7' r='4' />
      <path d='M7 7c0 3 2 5 2 9' />
      <path d='M15 7c0 4-2 6-2 10' />
    </svg>
  );
}