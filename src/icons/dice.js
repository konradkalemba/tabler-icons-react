import React from 'react';

export default function Dice({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-dice'
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
      <rect x='4' y='4' width='16' height='16' rx='2' />
      <circle cx='8.5' cy='8.5' r='.5' fill='currentColor' />
      <circle cx='15.5' cy='8.5' r='.5' fill='currentColor' />
      <circle cx='15.5' cy='15.5' r='.5' fill='currentColor' />
      <circle cx='8.5' cy='15.5' r='.5' fill='currentColor' />
    </svg>
  );
}
