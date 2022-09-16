import React from 'react';

export default function BrandUnity({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-unity'
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
      <path d='M14 3l6 4v7' />
      <path d='M18 17l-6 4l-6 -4' />
      <path d='M4 14v-7l6 -4' />
      <path d='M4 7l8 5v9' />
      <path d='M20 7l-8 5' />
    </svg>
  );
}
