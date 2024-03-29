import React from 'react';

export default function DeviceDesktopOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-device-desktop-off'
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
      <path d='M8 4h12a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1m-4 0h-12a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1' />
      <line x1='7' y1='20' x2='17' y2='20' />
      <line x1='9' y1='16' x2='9' y2='20' />
      <line x1='15' y1='16' x2='15' y2='20' />
      <line x1='3' y1='3' x2='21' y2='21' />
    </svg>
  );
}
