import React from 'react';

export default function Unlink({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-unlink'
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
      <path d='M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5' />
      <path d='M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5' />
      <line x1='16' y1='21' x2='16' y2='19' />
      <line x1='19' y1='16' x2='21' y2='16' />
      <line x1='3' y1='8' x2='5' y2='8' />
      <line x1='8' y1='3' x2='8' y2='5' />
    </svg>
  );
}
