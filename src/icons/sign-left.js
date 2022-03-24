import React from 'react';

export default function SignLeft({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-sign-left'
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
      <path d='M16 21h-4' />
      <path d='M14 21v-10' />
      <path d='M14 6v-3' />
      <path d='M18 6h-10l-2 2.5l2 2.5h10z' />
    </svg>
  );
}
