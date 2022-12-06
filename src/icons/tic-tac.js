import React from 'react';

export default function TicTac({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-tic-tac'
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
      <circle cx='6' cy='6' r='2' />
      <path d='M3 12h18' />
      <path d='M12 3v18' />
      <path d='M4 16l4 4' />
      <path d='M4 20l4 -4' />
      <path d='M16 4l4 4' />
      <path d='M16 8l4 -4' />
      <circle cx='18' cy='18' r='2' />
    </svg>
  );
}
