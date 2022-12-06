import React from 'react';

export default function TopologyBus({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-topology-bus'
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
      <path d='M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z' />
      <path d='M6 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z' />
      <path d='M22 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z' />
      <path d='M2 16h20' />
      <path d='M4 12v4' />
      <path d='M12 12v4' />
      <path d='M20 12v4' />
    </svg>
  );
}
