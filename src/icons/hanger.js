import React from 'react';

export default function Hanger({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-hanger'
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
      <path d='M15 7a3 3 0 1 0 -3 3v2m0 0l-8.624 5.488a0.82 .82 0 0 0 .44 1.512h16.368a0.82 .82 0 0 0 .44 -1.512l-8.624 -5.488z' />
    </svg>
  );
}
