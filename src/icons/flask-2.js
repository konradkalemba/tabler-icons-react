import React from 'react';

export default function Flask2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-flask-2'
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
      <path d='M6.1 15h11.8' />
      <path d='M14 3v7.342a6.002 6.002 0 0 1 1.318 10.658h-6.635a6.002 6.002 0 0 1 1.317 -10.66v-7.34h4z' />
      <path d='M9 3h6' />
    </svg>
  );
}