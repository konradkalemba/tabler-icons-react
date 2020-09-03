import React from 'react';

export default function Scooter({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-scooter'
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
      <circle cx='18' cy='17' r='2' />
      <circle cx='6' cy='17' r='2' />
      <path d='M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1' />
    </svg>
  );
}
