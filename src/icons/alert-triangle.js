import React from 'react';

export default function AlertTriangle({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-alert-triangle'
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
      <path d='M12 9v2m0 4v.01' />
      <path d='M5 19 h14 a2 2 0 0 0 1.84 -2.75 l-7.1 -12.25 a2 2 0 0 0 -3.5 0 l-7.1 12.25 a2 2 0 0 0 1.75 2.75' />
    </svg>
  );
}
