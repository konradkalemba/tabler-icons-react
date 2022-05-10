import React from 'react';

export default function DeviceTvOld({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-device-tv-old'
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
      <rect x='3' y='7' width='18' height='13' rx='2' />
      <path d='M16 3l-4 4l-4 -4' />
      <path d='M15 7v13' />
      <path d='M18 15v.01' />
      <path d='M18 12v.01' />
    </svg>
  );
}
