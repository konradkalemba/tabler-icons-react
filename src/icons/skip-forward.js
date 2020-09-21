import React from 'react';

export default function SkipForward({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-skip-forward'
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
      <path d='M4 6v12a2 2 0 0 0 2.75 1.84l8.25 -6.1a2 2 0 0 0 0 -3.5l-8.25 -6.1a2 2 0 0 0 -2.75 1.75' />
      <line x1='20' y1='4' x2='20' y2='20' />
    </svg>
  );
}
