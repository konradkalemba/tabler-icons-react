import React from 'react';

export default function DownloadOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-download-off'
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
      <path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 1.83 -1.19' />
      <path d='M7 11l5 5l2.005 -2.005m1.994 -1.994l1.001 -1.001' />
      <path d='M12 4v4m0 4v4' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
