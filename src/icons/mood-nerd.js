import React from 'react';

export default function MoodNerd({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-mood-nerd'
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
      <circle cx='12' cy='12' r='9' />
      <circle cx='8' cy='10' r='2' />
      <circle cx='16' cy='10' r='2' />
      <path d='M9.5 15a3.5 3.5 0 0 0 5 0' />
      <path d='M3.5 9h2.5' />
      <path d='M18 9h2.5' />
      <path d='M10 9.5c1.333 -1.333 2.667 -1.333 4 0' />
    </svg>
  );
}
