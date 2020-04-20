import React from 'react';

export default function RotateClockwise2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-rotate-clockwise-2'
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
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5' />
      <path d='M11 19.95a8 8 0 0 1 -5.3 -12.8' stroke-dasharray='.001 4.13' />
    </svg>
  );
}
