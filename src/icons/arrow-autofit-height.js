import React from 'react';

export default function ArrowAutofitHeight({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-autofit-height'
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
      <path d='M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6' />
      <path d='M18 14v7' />
      <path d='M18 3v7' />
      <path d='M15 18l3 3l3 -3' />
      <path d='M15 6l3 -3l3 3' />
    </svg>
  );
}
