import React from 'react';

export default function GenderThird({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-gender-third'
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
      <path d='M11 12a5 5 0 1 0 10 0a5 5 0 0 0 -10 0z' />
      <path d='M11 12h-3' />
      <path d='M8 12l-5 -4v8z' />
    </svg>
  );
}
