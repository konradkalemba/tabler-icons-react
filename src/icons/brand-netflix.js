import React from 'react';

export default function BrandNetflix({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-netflix'
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
      <path d='M9 3l10 18h-4l-10 -18z' />
      <path d='M5 3v18h4v-10.5' />
      <path d='M19 21v-18h-4v10.5' />
    </svg>
  );
}
