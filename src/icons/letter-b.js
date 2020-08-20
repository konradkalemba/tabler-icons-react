import React from 'react';

export default function LetterB({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-letter-b'
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
      <path d='M7 20v-16h6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6' />
      <line x1='7' y1='12' x2='13' y2='12' />
    </svg>
  );
}
