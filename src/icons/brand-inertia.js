import React from 'react';

export default function BrandInertia({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-inertia'
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
      <path d='M12.5 8l4 4l-4 4h4.5l4 -4l-4 -4z' />
      <path d='M3.5 8l4 4l-4 4h4.5l4 -4l-4 -4z' />
    </svg>
  );
}
