import React from 'react';

export default function DeviceMobileVibration({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-device-mobile-vibration'
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
      <rect x='3' y='3' width='12' height='18' rx='2' />
      <line x1='8' y1='4' x2='10' y2='4' />
      <line x1='9' y1='17' x2='9' y2='17.01' />
      <path d='M21 6l-2 3l2 3l-2 3l2 3' />
    </svg>
  );
}
