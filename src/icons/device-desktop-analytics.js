import React from 'react';

export default function DeviceDesktopAnalytics({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-device-desktop-analytics'
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
      <rect x='3' y='4' width='18' height='12' rx='1' />
      <path d='M7 20h10' />
      <path d='M9 16v4' />
      <path d='M15 16v4' />
      <path d='M9 12v-4' />
      <path d='M12 12v-1' />
      <path d='M15 12v-2' />
      <path d='M12 12v-1' />
    </svg>
  );
}
