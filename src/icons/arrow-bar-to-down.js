import React from 'react';

export default function ArrowBarToDown({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-bar-to-down'
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
      <line x1='4' y1='20' x2='20' y2='20' />
      <line x1='12' y1='14' x2='12' y2='4' />
      <line x1='12' y1='14' x2='16' y2='10' />
      <line x1='12' y1='14' x2='8' y2='10' />
    </svg>
  );
}
