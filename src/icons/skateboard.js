import React from 'react';

export default function Skateboard({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-skateboard'
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
      <circle cx='17' cy='15' r='2' />
      <path d='M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1' />
    </svg>
  );
}
