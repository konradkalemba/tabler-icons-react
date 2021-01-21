import React from 'react';

export default function CornerLeftUpDouble({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-corner-left-up-double'
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
      <path d='M18 19h-6a3 3 0 0 1 -3 -3v-7' />
      <path d='M13 13l-4 -4l-4 4m8 -5l-4 -4l-4 4' />
    </svg>
  );
}
