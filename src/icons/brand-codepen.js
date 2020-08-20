import React from 'react';

export default function BrandCodepen({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-codepen'
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
      <path d='M3 15l9 6l9 -6l-9 -6l-9 6' />
      <path d='M3 9l9 6l9 -6l-9 -6l-9 6' />
      <line x1='3' y1='9' x2='3' y2='15' />
      <line x1='21' y1='9' x2='21' y2='15' />
      <line x1='12' y1='3' x2='12' y2='9' />
      <line x1='12' y1='15' x2='12' y2='21' />
    </svg>
  );
}
