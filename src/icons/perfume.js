import React from 'react';

export default function Perfume({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-perfume'
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
      <path d='M10 6v3' />
      <path d='M14 6v3' />
      <rect x='5' y='9' width='14' height='12' rx='2' />
      <circle cx='12' cy='15' r='2' />
      <path d='M9 3h6v3h-6z' />
    </svg>
  );
}
