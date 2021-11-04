import React from 'react';

export default function ArrowAutofitRight({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-autofit-right'
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
      <path d='M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8' />
      <path d='M4 18h17' />
      <path d='M18 15l3 3l-3 3' />
    </svg>
  );
}
