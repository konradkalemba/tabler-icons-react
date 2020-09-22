import React from 'react';

export default function WifiOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-wifi-off'
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
      <line x1='12' y1='18' x2='12.01' y2='18' />
      <path d='M9.172 15.172a4 4 0 0 1 5.656 0' />
      <path d='M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163.155a7.965 7.965 0 0 1 3.287 2' />
      <path d='M3.515 9.515A12 12 0 0 1 7.059 7.06m3.101-.92a12 12 0 0 1 10.325 3.374' />
      <line x1='3' y1='3' x2='21' y2='21' />
    </svg>
  );
}
