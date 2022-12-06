import React from 'react';

export default function Braile({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-braile'
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
      <path d='M15 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z' />
      <path d='M7 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z' />
      <path d='M7 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z' />
      <path d='M16 12h.01' />
      <path d='M8 12h.01' />
      <path d='M16 19h.01' />
    </svg>
  );
}
