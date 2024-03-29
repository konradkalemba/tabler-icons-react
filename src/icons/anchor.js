import React from 'react';

export default function Anchor({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-anchor'
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
      <path d='M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2' />
      <circle cx='12' cy='6' r='3' />
    </svg>
  );
}
