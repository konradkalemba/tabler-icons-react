import React from 'react';

export default function Microphone2Off({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-microphone-2-off'
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
      <path d='M16.908 12.917a5 5 0 1 0 -5.827 -5.819' />
      <path d='M10.116 10.125l-6.529 7.46a2 2 0 1 0 2.827 2.83l7.461 -6.529' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
