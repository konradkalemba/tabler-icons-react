import React from 'react';

export default function Emphasis({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-emphasis'
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
      <path d='M16 5 h-8v10h8m-1 -5h-7' />
      <line x1='6' y1='20' x2='6' y2='20.01' />
      <line x1='10' y1='20' x2='10' y2='20.01' />
      <line x1='14' y1='20' x2='14' y2='20.01' />
      <line x1='18' y1='20' x2='18' y2='20.01' />
    </svg>
  );
}
