import React from 'react';

export default function RecordMailOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-record-mail-off'
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
      <circle cx='7' cy='12' r='3' />
      <path d='M18.569 14.557a3 3 0 1 0 -4.113 -4.149' />
      <path d='M7 15h8' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
