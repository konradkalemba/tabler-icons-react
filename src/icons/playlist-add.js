import React from 'react';

export default function PlaylistAdd({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-playlist-add'
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
      <path d='M19 8h-14' />
      <path d='M5 12h9' />
      <path d='M11 16h-6' />
      <path d='M15 16h6' />
      <path d='M18 13v6' />
    </svg>
  );
}
