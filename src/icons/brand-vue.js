import React from 'react';

export default function BrandVue({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-vue'
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
      <path d='M18.5 5l-6.5 10l-6.5 -10' />
      <path d='M15 5l-3 4.5l-3 -4.5h-7l10 16l10 -16z' />
    </svg>
  );
}
