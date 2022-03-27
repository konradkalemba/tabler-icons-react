import React from 'react';

export default function Message2Share({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-message-2-share'
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
      <path d='M17 4h4v4' />
      <path d='M20 11v3a3 3 0 0 1 -3 3h-2l-3 3l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h7' />
      <path d='M16 9l5 -5' />
    </svg>
  );
}
