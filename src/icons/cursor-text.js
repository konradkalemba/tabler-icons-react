import React from 'react';

export default function CursorText({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-cursor-text'
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
      <path d='M10 12h4' />
      <path d='M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3' />
      <path d='M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3' />
    </svg>
  );
}
