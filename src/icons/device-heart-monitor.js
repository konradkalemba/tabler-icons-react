import React from 'react';

export default function DeviceHeartMonitor({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-device-heart-monitor'
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
      <rect x='4' y='4' width='16' height='16' rx='2' />
      <path d='M4 9h6l1 -2l2 4l1 -2h6' />
      <path d='M4 14h16' />
      <path d='M14 17v.01' />
      <path d='M17 17v.01' />
    </svg>
  );
}
