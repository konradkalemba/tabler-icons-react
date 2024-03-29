import React from 'react';

export default function Soup({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-soup'
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
      <path d='M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z' />
      <path d='M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2' />
      <path d='M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2' />
      <path d='M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2' />
    </svg>
  );
}
