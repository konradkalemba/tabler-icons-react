import React from 'react';

export default function Superscript({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-superscript'
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
      <path d='M5 7l8 10m-8 0l8 -10' />
      <path d='M21 11h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2' />
    </svg>
  );
}
