import React from 'react';

export default function BrandXbox({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-xbox'
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
      <circle cx='12' cy='12' r='9' />
      <path d='M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5' />
      <path d='M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5' />
    </svg>
  );
}
