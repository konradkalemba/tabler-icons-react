import React from 'react';

export default function MoodUnamused({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-mood-unamused'
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
      <path d='M11 16l4 -1.5' />
      <path d='M10 10c-.5 -1 -2.5 -1 -3 0' />
      <path d='M17 10c-.5 -1 -2.5 -1 -3 0' />
    </svg>
  );
}
