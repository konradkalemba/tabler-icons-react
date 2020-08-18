import React from 'react';

export default function Forklift({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-forklift'
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
      <circle cx='5' cy='17' r='2' />
      <circle cx='14' cy='17' r='2' />
      <line x1='7' y1='17' x2='12' y2='17' />
      <path d='M3 17v-6h13v6' />
      <path d='M5 11v-4h4' />
      <path d='M9 11v-6h4l3 6' />
      <path d='M22 15h-3v-10' />
      <line x1='16' y1='13' x2='19' y2='13' />
    </svg>
  );
}