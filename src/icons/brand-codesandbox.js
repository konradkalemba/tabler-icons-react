import React from 'react';

export default function BrandCodesandbox({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-codesandbox'
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
      <path d='M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z' />
      <path d='M12 12l4 -2.25l4 -2.25' />
      <line x1='12' y1='12' x2='12' y2='21' />
      <path d='M12 12l-4 -2.25l-4 -2.25' />
      <path d='M20 12l-4 2v4.75' />
      <path d='M4 12l4 2l0 4.75' />
      <path d='M8 5.25l4 2.25l4 -2.25' />
    </svg>
  );
}
