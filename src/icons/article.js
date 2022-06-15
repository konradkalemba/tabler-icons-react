import React from 'react';

export default function Article({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-article'
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
      <rect x='3' y='4' width='18' height='16' rx='2' />
      <path d='M7 8h10' />
      <path d='M7 12h10' />
      <path d='M7 16h10' />
    </svg>
  );
}
