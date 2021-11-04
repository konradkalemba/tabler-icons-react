import React from 'react';

export default function ArrowAutofitLeft({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-autofit-left'
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
      <path d='M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8' />
      <path d='M20 18h-17' />
      <path d='M6 15l-3 3l3 3' />
    </svg>
  );
}
