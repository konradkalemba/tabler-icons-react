import React from 'react';

export default function ArrowBearRight2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-bear-right-2'
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
      <path d='M15 3h5v5' />
      <path d='M20 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93' />
      <path d='M4 5l4.5 4.5' />
    </svg>
  );
}
