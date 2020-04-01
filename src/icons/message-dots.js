import React from 'react';

export default function MessageDots({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-message-dots'
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
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4' />
      <line x1='12' y1='11' x2='12' y2='11.01' />
      <line x1='8' y1='11' x2='8' y2='11.01' />
      <line x1='16' y1='11' x2='16' y2='11.01' />
    </svg>
  );
}
