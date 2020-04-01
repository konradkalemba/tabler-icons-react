import React from 'react';

export default function ArrowLeft({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-left'
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
      <line x1='5' y1='12' x2='19' y2='12' />
      <line x1='5' y1='12' x2='11' y2='18' />
      <line x1='5' y1='12' x2='11' y2='6' />
    </svg>
  );
}
