import React from 'react';

export default function LineDotted({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-line-dotted'
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
      <path d='M4 12v.01' />
      <path d='M8 12v.01' />
      <path d='M12 12v.01' />
      <path d='M16 12v.01' />
      <path d='M20 12v.01' />
    </svg>
  );
}
