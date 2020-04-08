import React from 'react';

export default function Rotate2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-rotate-2'
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
      <path d='M12 4a8 8 0 0 0 -3 15.45m0 -4.45v5h-5' />
      <path d='M13 19.95a8 8 0 0 0 2 -15.35' stroke-dasharray='.001 4' />
    </svg>
  );
}
