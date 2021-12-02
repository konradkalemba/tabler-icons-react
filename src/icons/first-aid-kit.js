import React from 'react';

export default function FirstAidKit({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-first-aid-kit'
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
      <path d='M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2' />
      <rect x='4' y='8' width='16' height='12' rx='2' />
      <path d='M10 14h4' />
      <path d='M12 12v4' />
    </svg>
  );
}
