import React from 'react';

export default function CodeCircle2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-code-circle-2'
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
      <path d='M8.5 13.5l-1.5 -1.5l1.5 -1.5' />
      <path d='M15.5 10.5l1.5 1.5l-1.5 1.5' />
      <circle cx='12' cy='12' r='9' />
      <path d='M13 9.5l-2 5.5' />
    </svg>
  );
}
