import React from 'react';

export default function Sticker({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-sticker'
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
      <path d='M20 12l-2 .5a6 6 0 0 1 -6.5 -6.5l.5 -2l8 8' />
      <path d='M20 12a8 8 0 1 1 -8 -8' />
    </svg>
  );
}
