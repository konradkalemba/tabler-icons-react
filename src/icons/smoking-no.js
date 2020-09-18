import React from 'react';

export default function SmokingNo({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-smoking-no'
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
      <rect x='3' y='13' width='18' height='4' rx='1' />
      <line x1='8' y1='13' x2='8' y2='17' />
      <path d='M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5' />
      <line x1='3' y1='3' x2='21' y2='21' />
    </svg>
  );
}
