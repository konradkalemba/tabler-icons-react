import React from 'react';

export default function TextSpellcheck({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-text-spellcheck'
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
      <path d='M5 15v-7.5a3.5 3.5 0 0 1 7 0v7.5' />
      <path d='M5 10h7' />
      <path d='M10 18l3 3l7 -7' />
    </svg>
  );
}
