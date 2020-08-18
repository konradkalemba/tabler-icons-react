import React from 'react';

export default function Test({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-test'
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
      <path d='M3 9h18M3 9v6m0-6V5a2 2 0 0 1 2 -2h4m12 6v6m0-6V5a2 2 0 0 0 -2 -2h-4M3 15v4a2 2 0 0 0 2 2h4m-6-6h18m0 0v4a2 2 0 0 1 -2 2h-4M9 3v18M9 3h6M9 21h6m0-18v18' />
    </svg>
  );
}
