import React from 'react';

export default function Italic({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-italic'
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
      <line x1='11' y1='5' x2='17' y2='5' />
      <line x1='7' y1='19' x2='13' y2='19' />
      <line x1='14' y1='5' x2='10' y2='19' />
    </svg>
  );
}
