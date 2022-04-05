import React from 'react';

export default function AdjustmentsOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-adjustments-off'
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
      <circle cx='6' cy='10' r='2' />
      <path d='M6 6v2' />
      <path d='M6 12v8' />
      <circle cx='12' cy='16' r='2' />
      <path d='M12 4v4' />
      <path d='M12 12v2' />
      <path d='M12 18v2' />
      <circle cx='18' cy='7' r='2' />
      <path d='M18 4v1' />
      <path d='M18 9v5' />
      <path d='M18 18v2' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
