import React from 'react';

export default function Snowflake({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-snowflake'
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
      <path d='M10 4l2 1l2 -1m-2 -2v6.5l3 1.72' />
      <path d='M10 4l2 1l2 -1m-2 -2v6.5l3 1.72' transform='rotate(60 12 12)' />
      <path d='M10 4l2 1l2 -1m-2 -2v6.5l3 1.72' transform='rotate(120 12 12)' />
      <path d='M10 4l2 1l2 -1m-2 -2v6.5l3 1.72' transform='rotate(180 12 12)' />
      <path d='M10 4l2 1l2 -1m-2 -2v6.5l3 1.72' transform='rotate(240 12 12)' />
      <path d='M10 4l2 1l2 -1m-2 -2v6.5l3 1.72' transform='rotate(300 12 12)' />
    </svg>
  );
}
