import React from 'react';

export default function PillOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-pill-off'
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
      <path d='M10.495 6.505l2.005 -2.005a4.95 4.95 0 0 1 7 7l-1.998 1.998m-2 2l-4.002 4.002a4.95 4.95 0 0 1 -7 -7l4 -4' />
      <path d='M8.5 8.5l7 7' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
