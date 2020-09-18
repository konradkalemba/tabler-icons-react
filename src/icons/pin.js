import React from 'react';

export default function Pin({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-pin'
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
      <line x1='4' y1='20' x2='9.5' y2='14.5' />
      <path d='M6 11l7 7l1 -1l1 -4l4 -4m-4 -4l-4 4l-4 1l-1 1' />
      <line x1='14' y1='4' x2='20' y2='10' />
    </svg>
  );
}
