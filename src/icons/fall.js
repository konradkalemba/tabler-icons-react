import React from 'react';

export default function Fall({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-fall'
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
      <path d='M11 21l1-5-1-4-3-4h4l3-3' />
      <path d='M6 16l-1-4l3-4' />
      <circle cx='6' cy='5' r='1' />
      <path d='M13.5 12h2.5l4 2' />
    </svg>
  );
}
