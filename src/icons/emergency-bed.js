import React from 'react';

export default function EmergencyBed({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-emergency-bed'
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
      <circle cx='16' cy='18' r='2' />
      <circle cx='8' cy='18' r='2' />
      <path d='M4 8l2.1 2.8a3 3 0 0 0 2.4 1.2h11.5' />
      <path d='M10 6h4' />
      <path d='M12 4v4' />
      <path d='M12 12v2l-2.5 2.5' />
      <path d='M14.5 16.5l-2.5 -2.5' />
    </svg>
  );
}
