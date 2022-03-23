import React from 'react';

export default function ArrowRampRight2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-ramp-right-2'
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
      <path d='M6 3v8.707' />
      <path d='M16 14l4 -4l-4 -4' />
      <path d='M6 21c0 -6.075 4.925 -11 11 -11h3' />
    </svg>
  );
}
