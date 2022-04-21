import React from 'react';

export default function DevicesPcOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-devices-pc-off'
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
      <path d='M9 9v10h-6v-14h2' />
      <path d='M13 9h9v7h-2m-4 0h-4v-4' />
      <path d='M14 19h5' />
      <path d='M17 17v2' />
      <path d='M6 13v.01' />
      <path d='M6 16v.01' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
