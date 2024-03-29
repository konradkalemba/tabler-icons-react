import React from 'react';

export default function FileStack({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-file-stack'
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
      <path d='M14 3v4a1 1 0 0 0 1 1h4' />
      <path d='M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4' />
      <path d='M5 21h14' />
      <path d='M5 18h14' />
      <path d='M5 15h14' />
    </svg>
  );
}
