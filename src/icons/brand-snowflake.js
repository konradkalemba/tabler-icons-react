import React from 'react';

export default function BrandSnowflake({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-snowflake'
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
      <path d='M14 21v-5.5l4.5 2.5' />
      <path d='M10 21v-5.5l-4.5 2.5' />
      <path d='M3.5 14.5l4.5 -2.5l-4.5 -2.5' />
      <path d='M20.5 9.5l-4.5 2.5l4.5 2.5' />
      <path d='M10 3v5.5l-4.5 -2.5' />
      <path d='M14 3v5.5l4.5 -2.5' />
      <path d='M12 11l1 1l-1 1l-1 -1z' />
    </svg>
  );
}
