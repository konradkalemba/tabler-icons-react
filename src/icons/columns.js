import React from 'react';

export default function Columns({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-columns'
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
      <line x1='4' y1='6' x2='9.5' y2='6' />
      <line x1='4' y1='10' x2='9.5' y2='10' />
      <line x1='4' y1='14' x2='9.5' y2='14' />
      <line x1='4' y1='18' x2='9.5' y2='18' />
      <line x1='14.5' y1='6' x2='20' y2='6' />
      <line x1='14.5' y1='10' x2='20' y2='10' />
      <line x1='14.5' y1='14' x2='20' y2='14' />
      <line x1='14.5' y1='18' x2='20' y2='18' />
    </svg>
  );
}
