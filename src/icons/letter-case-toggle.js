import React from 'react';

export default function LetterCaseToggle({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-letter-case-toggle'
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
      <circle cx='6.5' cy='15.5' r='3.5' />
      <path d='M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5' />
      <path d='M14 13h7' />
      <path d='M10 12v7' />
    </svg>
  );
}
