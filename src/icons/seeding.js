import React from 'react';

export default function Seeding({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-seeding'
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
      <path d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3' />
      <path d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3' />
      <line x1='12' y1='20' x2='12' y2='10' />
    </svg>
  );
}
