import React from 'react';

export default function WashDryDip({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-wash-dry-dip'
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
      <path d='M12 7v10' />
      <path d='M16 7v10' />
      <path d='M8 7v10' />
    </svg>
  );
}
