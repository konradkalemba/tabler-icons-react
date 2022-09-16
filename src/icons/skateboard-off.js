import React from 'react';

export default function SkateboardOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-skateboard-off'
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
      <circle cx='7' cy='15' r='2' />
      <path d='M15 15a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2' />
      <path d='M3 9c0 .552 .895 1 2 1h5m4 0h5c1.105 0 2 -.448 2 -1' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
