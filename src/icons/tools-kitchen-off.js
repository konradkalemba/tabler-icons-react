import React from 'react';

export default function ToolsKitchenOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-tools-kitchen-off'
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
      <path d='M7 3h5l-.5 4.5m-.4 3.595l-.1 .905h-6l-.875 -7.874' />
      <path d='M7 18h2v3h-2z' />
      <path d='M15.225 11.216c.42 -2.518 1.589 -5.177 4.775 -8.216v12h-1' />
      <path d='M20 15v1m0 4v1h-1v-2' />
      <path d='M8 12v6' />
      <path d='M3 3l18 18' />
    </svg>
  );
}