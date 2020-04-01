import React from 'react';

export default function Gift({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-gift'
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
      <rect x='3' y='8' width='18' height='4' rx='1' />
      <line x1='12' y1='8' x2='12' y2='21' />
      <path d='M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7' />
      <path d='M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5' />
    </svg>
  );
}
