import React from 'react';

export default function SquaresFilled({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-squares-filled'
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
      <rect x='8' y='8' width='12' height='12' rx='2' />
      <path d='M8 14.5l6.492 -6.492' />
      <path d='M13.496 20.004l6.504 -6.504l-6.504 6.504z' />
      <path d='M8.586 19.414l10.827 -10.827' />
      <path d='M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2' />
    </svg>
  );
}
