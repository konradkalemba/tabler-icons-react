import React from 'react';

export default function Affiliate({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-affiliate'
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
      <path d='M5.5 5.5l1.706 5.685m5.607 5.609l5.687 1.706' />
      <path d='M11.683 12.317l6.817 -6.817' />
      <circle cx='5.5' cy='5.5' r='1.5' />
      <circle cx='18.5' cy='5.5' r='1.5' />
      <circle cx='18.5' cy='18.5' r='1.5' />
      <circle cx='8.5' cy='15.5' r='4.5' />
    </svg>
  );
}
