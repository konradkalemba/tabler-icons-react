import React from 'react';

export default function Radar2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-radar-2'
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
      <circle cx='12' cy='12' r='1' />
      <path d='M15.51 15.56a5 5 0 1 0 -3.51 1.44' />
      <path d='M18.832 17.86a9 9 0 1 0 -6.832 3.14' />
      <path d='M12 12v9' />
    </svg>
  );
}
