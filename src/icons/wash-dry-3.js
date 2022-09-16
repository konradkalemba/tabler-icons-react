import React from 'react';

export default function WashDry3({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-wash-dry-3'
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
      <rect x='3' y='3' width='18' height='18' rx='3' />
      <circle cx='12' cy='12' r='6' />
      <path d='M12 12h.01' />
      <path d='M9 12h.01' />
      <path d='M15 12h.01' />
    </svg>
  );
}
