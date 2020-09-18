import React from 'react';

export default function Separator({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-separator'
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
      <line x1='3' y1='12' x2='3' y2='12.01' />
      <line x1='7' y1='12' x2='17' y2='12' />
      <line x1='21' y1='12' x2='21' y2='12.01' />
    </svg>
  );
}
