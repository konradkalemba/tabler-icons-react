import React from 'react';

export default function Sunset2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-sunset-2'
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
      <path d='M3 13h1' />
      <path d='M20 13h1' />
      <path d='M5.6 6.6l.7 .7' />
      <path d='M18.4 6.6l-.7 .7' />
      <path d='M8 13a4 4 0 1 1 8 0' />
      <path d='M3 17h18' />
      <path d='M7 20h5' />
      <path d='M16 20h1' />
      <path d='M12 5v-1' />
    </svg>
  );
}
