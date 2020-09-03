import React from 'react';

export default function Trident({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-trident'
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
      <path d='M3 6l2 -2v3a7 7 0 0 0 14 0v-3l2 2' />
      <path d='M12 21v-18l-2 2m4 0l-2 -2' />
    </svg>
  );
}
