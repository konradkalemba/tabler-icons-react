import React from 'react';

export default function Grave({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-grave'
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
      <path d='M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14z' />
      <path d='M10 16v-5h-4v-4h4v-4h4v4h4v4h-4v5' />
    </svg>
  );
}
