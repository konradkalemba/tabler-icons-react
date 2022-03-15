import React from 'react';

export default function NorthStar({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-north-star'
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
      <path d='M3 12h18' />
      <path d='M12 21v-18' />
      <path d='M7.5 7.5l9 9' />
      <path d='M7.5 16.5l9 -9' />
    </svg>
  );
}
