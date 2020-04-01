import React from 'react';

export default function Microphone({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-microphone'
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
      <rect x='9' y='2' width='6' height='11' rx='3' />
      <path d='M5 10a7 7 0 0 0 14 0' />
      <line x1='8' y1='21' x2='16' y2='21' />
      <line x1='12' y1='17' x2='12' y2='21' />
    </svg>
  );
}
