import React from 'react';

export default function H2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-h-2'
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
      <path d='M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 -.001' />
      <path d='M4 6v12' />
      <path d='M12 6v12' />
      <path d='M11 18h2' />
      <path d='M3 18h2' />
      <path d='M4 12h8' />
      <path d='M3 6h2' />
      <path d='M11 6h2' />
    </svg>
  );
}
