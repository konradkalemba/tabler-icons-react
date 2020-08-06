import React from 'react';

export default function Markdown({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-markdown'
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
      <rect x='3' y='5' width='18' height='14' rx='2' />
      <path d='M7 15v-6l2 2l2 -2v6' />
      <path d='M14 13l2 2l2 -2m-2 2v-6' />
    </svg>
  );
}
