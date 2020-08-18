import React from 'react';

export default function LettersCase({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-letters-case'
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
      <circle cx='18' cy='16' r='3' />
      <line x1='21' y1='13' x2='21' y2='19' />
      <path d='M3 19l5 -13l5 13' />
      <line x1='5' y1='14' x2='11' y2='14' />
    </svg>
  );
}
