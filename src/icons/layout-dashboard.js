import React from 'react';

export default function LayoutDashboard({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-layout-dashboard'
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
      <path d='M4 4h6v8h-6z' />
      <path d='M4 16h6v4h-6z' />
      <path d='M14 12h6v8h-6z' />
      <path d='M14 4h6v4h-6z' />
    </svg>
  );
}
