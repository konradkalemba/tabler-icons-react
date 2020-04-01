import React from 'react';

export default function UserCheck({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-user-check'
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
      <circle cx='8.5' cy='7' r='4' />
      <path d='M2 21v-2a4 4 0 0 1 4 -4h5a4 4 0 0 1 4 4v2' />
      <path d='M16 11l2 2l4 -4' />
    </svg>
  );
}
