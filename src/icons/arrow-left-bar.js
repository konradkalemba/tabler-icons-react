import React from 'react';

export default function ArrowLeftBar({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-left-bar'
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
      <line x1='21' y1='12' x2='3' y2='12' />
      <path d='M6 9l-3 3l3 3' />
      <line x1='21' y1='9' x2='21' y2='15' />
    </svg>
  );
}
