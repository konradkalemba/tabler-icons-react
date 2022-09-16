import React from 'react';

export default function Transform({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-transform'
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
      <path d='M5 13v.875c0 3.383 2.686 6.125 6 6.125' />
      <circle cx='6' cy='6' r='3' />
      <circle cx='18' cy='18' r='3' />
      <path d='M16 9l2 2l2 -2' />
      <path d='M18 10v-.875c0 -3.383 -2.686 -6.125 -6 -6.125' />
      <path d='M3 15l2 -2l2 2' />
    </svg>
  );
}
