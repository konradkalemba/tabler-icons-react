import React from 'react';

export default function LayoutAlignMiddle({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-layout-align-middle'
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
      <line x1='4' y1='12' x2='9' y2='12' />
      <line x1='15' y1='12' x2='20' y2='12' />
      <rect x='9' y='6' width='6' height='12' rx='2' />
    </svg>
  );
}
