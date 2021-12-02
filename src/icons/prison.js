import React from 'react';

export default function Prison({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-prison'
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
      <path d='M18 4v16' />
      <path d='M14 4v16' />
      <path d='M6 4v5' />
      <path d='M6 15v5' />
      <path d='M10 4v5' />
      <path d='M11 9h-6v6h6z' />
      <path d='M10 15v5' />
      <path d='M8 12h-.01' />
    </svg>
  );
}
