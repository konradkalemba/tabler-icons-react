import React from 'react';

export default function WheelchairOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-wheelchair-off'
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
      <circle cx='8' cy='16' r='5' />
      <path d='M17.582 17.59a2 2 0 0 0 2.833 2.824' />
      <path d='M14 14h-1.4' />
      <path d='M6 6v5' />
      <path d='M6 8h2m4 0h5' />
      <path d='M15 8v3' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
