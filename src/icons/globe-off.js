import React from 'react';

export default function GlobeOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-globe-off'
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
      <path d='M8.36 8.339a4 4 0 0 0 5.281 5.31m1.995 -1.98a4 4 0 0 0 -5.262 -5.325' />
      <path d='M6.75 16a8.015 8.015 0 0 0 9.799 .553m2.016 -1.998a8.015 8.015 0 0 0 -2.565 -11.555' />
      <path d='M12 18v4' />
      <path d='M8 22h8' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
