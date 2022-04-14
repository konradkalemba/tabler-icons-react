import React from 'react';

export default function GenderAndrogyne({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-gender-androgyne'
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
      <path d='M13 11l6 -6' />
      <circle cx='9' cy='15' r='5' />
      <path d='M19 9v-4h-4' />
      <path d='M16.5 10.5l-3 -3' />
    </svg>
  );
}
