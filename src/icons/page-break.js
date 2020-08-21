import React from 'react';

export default function PageBreak({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-page-break'
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
      <path d='M14 3v4a1 1 0 0 0 1 1h4' />
      <path d='M19 18v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1' />
      <path d='M3 14h3m4.5 0h3m4.5 0h3' />
      <path d='M5 10v-5a2 2 0 0 1 2 -2h7l5 5v2' />
    </svg>
  );
}