import React from 'react';

export default function RecordMail({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-record-mail'
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
      <circle cx='17' cy='12' r='3' />
      <line x1='7' y1='15' x2='17' y2='15' />
    </svg>
  );
}
