import React from 'react';

export default function Share({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-share'
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
      <circle cx='6' cy='12' r='3' />
      <circle cx='18' cy='6' r='3' />
      <circle cx='18' cy='18' r='3' />
      <line x1='8.7' y1='10.7' x2='15.3' y2='7.3' />
      <line x1='8.7' y1='13.3' x2='15.3' y2='16.7' />
    </svg>
  );
}
