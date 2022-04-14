import React from 'react';

export default function GenderTrasvesti({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-gender-trasvesti'
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
      <path d='M15 20a5 5 0 1 1 0 -10a5 5 0 0 1 0 10z' />
      <path d='M6 6l5.4 5.4' />
      <path d='M4 8l4 -4' />
    </svg>
  );
}
