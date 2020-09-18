import React from 'react';

export default function Radioactive({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-radioactive'
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
      <path d='M13.5 14.6 l 3 5.19 a9 9 0 0 0 4.5 -7.79 h -6 a3 3 0 0 1 -1.5 2.6' />
      <path d='M13.5 9.4 l 3 -5.19 a9 9 0 0 0 -9 0 l 3 5.19 a3 3 0 0 1 3 0' />
      <path d='M10.5 14.6 l -3 5.19 a9 9 0 0 1 -4.5 -7.79 h6 a3 3 0 0 0 1.5 2.6' />
    </svg>
  );
}
