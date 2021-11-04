import React from 'react';

export default function ArrowAutofitUp({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-autofit-up'
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
      <path d='M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8' />
      <path d='M18 20v-17' />
      <path d='M15 6l3 -3l3 3' />
    </svg>
  );
}
