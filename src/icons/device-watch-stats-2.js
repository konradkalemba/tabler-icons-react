import React from 'react';

export default function DeviceWatchStats2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-device-watch-stats-2'
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
      <rect x='6' y='6' width='12' height='12' rx='3' />
      <path d='M9 18v3h6v-3' />
      <path d='M9 6v-3h6v3' />
      <path d='M12 10a2 2 0 1 0 2 2' />
    </svg>
  );
}
