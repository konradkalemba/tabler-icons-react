import React from 'react';

export default function AlphabetLatin({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-alphabet-latin'
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
      <path d='M6 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3' />
      <path d='M14 7v10' />
      <rect x='14' y='10' width='5' height='7' rx='2' />
    </svg>
  );
}
