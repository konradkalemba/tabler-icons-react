import React from 'react';

export default function Award({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-award'
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
      <circle cx='12' cy='9' r='6' />
      <polyline
        points='9 14.2 9 21 12 19 15 21 15 14.2'
        transform='rotate(-30 12 9)'
      />
      <polyline
        points='9 14.2 9 21 12 19 15 21 15 14.2'
        transform='rotate(30 12 9)'
      />
    </svg>
  );
}
