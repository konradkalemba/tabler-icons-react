import React from 'react';

export default function Thermometer({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-thermometer'
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
      <path d='M19 5a2.828 2.828 0 0 1 0 4l-8 8h-4v-4l8 -8a2.828 2.828 0 0 1 4 0z' />
      <path d='M16 7l-1.5 -1.5' />
      <path d='M13 10l-1.5 -1.5' />
      <path d='M10 13l-1.5 -1.5' />
      <path d='M7 17l-3 3' />
    </svg>
  );
}
