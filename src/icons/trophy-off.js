import React from 'react';

export default function TrophyOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-trophy-off'
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
      <path d='M8 21h8' />
      <path d='M12 17v4' />
      <path d='M8 4h9' />
      <path d='M17 4v8c0 .31 -.028 .612 -.082 .905m-1.384 2.632a5 5 0 0 1 -8.534 -3.537v-5' />
      <circle cx='5' cy='9' r='2' />
      <circle cx='19' cy='9' r='2' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
