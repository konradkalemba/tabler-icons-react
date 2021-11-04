import React from 'react';

export default function ArrowAutofitContent({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-autofit-content'
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
      <path d='M6 4l-3 3l3 3' />
      <path d='M18 4l3 3l-3 3' />
      <rect x='4' y='14' width='16' height='6' rx='2' />
      <path d='M10 7h-7' />
      <path d='M21 7h-7' />
    </svg>
  );
}
