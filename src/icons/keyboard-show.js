import React from 'react';

export default function KeyboardShow({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-keyboard-show'
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
      <rect x='2' y='3' width='20' height='12' rx='2' />
      <line x1='6' y1='7' x2='6' y2='7' />
      <line x1='10' y1='7' x2='10' y2='7' />
      <line x1='14' y1='7' x2='14' y2='7' />
      <line x1='18' y1='7' x2='18' y2='7' />
      <line x1='6' y1='11' x2='6' y2='11.01' />
      <line x1='18' y1='11' x2='18' y2='11.01' />
      <line x1='10' y1='11' x2='14' y2='11' />
      <path d='M10 19l2 2l2 -2' />
    </svg>
  );
}