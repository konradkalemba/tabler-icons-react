import React from 'react';

export default function Tornado({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-tornado'
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
      <path d='M21 4h-18' />
      <path d='M13 16h-6' />
      <line x1='11' y1='20' x2='15' y2='20' />
      <line x1='6' y1='8' x2='20' y2='8' />
      <line x1='4' y1='12' x2='16' y2='12' />
    </svg>
  );
}
