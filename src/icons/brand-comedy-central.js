import React from 'react';

export default function BrandComedyCentral({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-comedy-central'
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
      <path d='M5.343 17.657a8 8 0 1 0 0 -11.314' />
      <path d='M13.828 9.172a4 4 0 1 0 0 5.656' />
    </svg>
  );
}
