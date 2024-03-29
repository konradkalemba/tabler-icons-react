import React from 'react';

export default function PlugOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-plug-off'
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
      <path d='M16.123 16.092l-.177 .177a5.81 5.81 0 1 1 -8.215 -8.215l.159 -.159' />
      <path d='M4 20l3.5 -3.5' />
      <path d='M15 4l-3.5 3.5' />
      <path d='M20 9l-3.5 3.5' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
