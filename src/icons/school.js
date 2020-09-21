import React from 'react';

export default function School({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-school'
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
      <path d='M22 9l-10 -4l-10 4l10 4l10 -4v6' />
      <path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4' />
    </svg>
  );
}
