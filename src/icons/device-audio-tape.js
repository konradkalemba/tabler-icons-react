import React from 'react';

export default function DeviceAudioTape({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-device-audio-tape'
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
      <rect x='3' y='5' width='18' height='14' rx='2' />
      <path d='M3 17l4 -3h10l4 3' />
      <circle cx='7.5' cy='9.5' r='.5' fill='currentColor' />
      <circle cx='16.5' cy='9.5' r='.5' fill='currentColor' />
    </svg>
  );
}
