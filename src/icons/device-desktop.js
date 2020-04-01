import React from 'react';

export default function DeviceDesktop({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-device-desktop'
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
      <path stroke='none' d='M0 0h24v24H0z' />
      <rect x='3' y='4' width='18' height='12' rx='1' />
      <line x1='7' y1='20' x2='17' y2='20' />
      <line x1='9' y1='16' x2='9' y2='20' />
      <line x1='15' y1='16' x2='15' y2='20' />
    </svg>
  );
}
