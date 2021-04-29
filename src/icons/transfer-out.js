import React from 'react';

export default function TransferOut({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-transfer-out'
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
      <path d='M4 19v2h16v-14l-8 -4l-8 4v2' />
      <path d='M13 14h-9' />
      <path d='M7 11l-3 3l3 3' />
    </svg>
  );
}
