import React from 'react';

export default function MoodAnnoyed2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-mood-annoyed-2'
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
      <path d='M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z' />
      <path d='M15 14c-2 0 -3 1 -3.5 2.05' />
      <path d='M10 9.25c-.5 1 -2.5 1 -3 0' />
      <path d='M17 9.25c-.5 1 -2.5 1 -3 0' />
    </svg>
  );
}
