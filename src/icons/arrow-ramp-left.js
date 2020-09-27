import React from 'react';

export default function ArrowRampLeft({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-ramp-left'
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
      <line x1='17' y1='3' x2='17' y2='11.707' />
      <path d='M13 7l4 -4l4 4' />
      <path d='M7 14l-4 -4l4 -4' />
      <path d='M17 21a11 11 0 0 0 -11 -11h-3' />
    </svg>
  );
}
