import React from 'react';

export default function Fence({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-fence'
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
      <path d='M4 12v4h16v-4z' />
      <path d='M6 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6' />
      <path d='M14 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6' />
    </svg>
  );
}
