import React from 'react';

export default function SectionSign({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-section-sign'
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
      <path d='M9.172 19.004a3.001 3.001 0 1 0 2.828 -4.004' />
      <path d='M14.83 5.002a3.001 3.001 0 1 0 -2.83 3.998' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
}
