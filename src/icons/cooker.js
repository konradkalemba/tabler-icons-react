import React from 'react';

export default function Cooker({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-cooker'
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
      <path d='M12 7h.01' />
      <path d='M15 7h.01' />
      <path d='M9 7h.01' />
      <rect x='5' y='3' width='14' height='18' rx='2' />
      <path d='M9 15h6' />
      <path d='M5 11h14' />
    </svg>
  );
}
