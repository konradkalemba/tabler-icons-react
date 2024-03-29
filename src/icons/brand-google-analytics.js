import React from 'react';

export default function BrandGoogleAnalytics({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-google-analytics'
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
      <rect x='10' y='9' width='4' height='12' rx='1.105' />
      <rect x='17' y='3' width='4' height='18' rx='1.105' />
      <circle cx='5' cy='19' r='2' />
    </svg>
  );
}
