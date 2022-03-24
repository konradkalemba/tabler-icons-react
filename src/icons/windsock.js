import React from 'react';

export default function Windsock({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-windsock'
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
      <path d='M6 3v18' />
      <path d='M6 11l12 -1v-4l-12 -1' />
      <path d='M10 5.5v5' />
      <path d='M14 6v4' />
      <path d='M4 21h4' />
    </svg>
  );
}
