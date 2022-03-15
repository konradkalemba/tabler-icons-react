import React from 'react';

export default function ArrowsShuffle2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-shuffle-2'
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
      <path d='M18 4l3 3l-3 3' />
      <path d='M18 20l3 -3l-3 -3' />
      <path d='M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5' />
      <path d='M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5' />
    </svg>
  );
}
