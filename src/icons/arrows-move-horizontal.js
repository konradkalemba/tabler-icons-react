import React from 'react';

export default function ArrowsMoveHorizontal({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrows-move-horizontal'
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
      <path d='M18 9l3 3l-3 3' />
      <path d='M15 12h6' />
      <path d='M6 9l-3 3l3 3' />
      <path d='M3 12h6' />
    </svg>
  );
}
