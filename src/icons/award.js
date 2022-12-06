import React from 'react';

export default function Award({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-award'
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
      <circle cx='12' cy='9' r='6' />
      <path d='M12.002 15.003l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889' />
      <path d='M6.802 12.003l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889' />
    </svg>
  );
}
