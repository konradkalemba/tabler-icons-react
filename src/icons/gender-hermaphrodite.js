import React from 'react';

export default function GenderHermaphrodite({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-gender-hermaphrodite'
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
      <path d='M12 14v7' />
      <path d='M9 18h6' />
      <path d='M12 6a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z' />
      <path d='M15 3a3 3 0 1 1 -6 0' />
    </svg>
  );
}
