import React from 'react';

export default function BrandAndroid({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-android'
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
      <line x1='4' y1='10' x2='4' y2='16' />
      <line x1='20' y1='10' x2='20' y2='16' />
      <path d='M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0' />
      <line x1='8' y1='3' x2='9' y2='5' />
      <line x1='16' y1='3' x2='15' y2='5' />
      <line x1='9' y1='18' x2='9' y2='21' />
      <line x1='15' y1='18' x2='15' y2='21' />
    </svg>
  );
}
