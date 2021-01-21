import React from 'react';

export default function BoxMultiple3({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-box-multiple-3'
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
      <rect x='7' y='3' width='14' height='14' rx='2' />
      <path d='M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2' />
      <path d='M14 10a2 2 0 1 0 -2 -2' />
      <path d='M12 12a2 2 0 1 0 2 -2' />
    </svg>
  );
}
