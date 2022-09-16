import React from 'react';

export default function PhotoCheck({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-photo-check'
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
      <path d='M15 8h.01' />
      <path d='M11 20h-4a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6' />
      <path d='M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4' />
      <path d='M14 14l1 -1c.928 -.893 2.072 -.893 3 0' />
      <path d='M15 19l2 2l4 -4' />
    </svg>
  );
}
