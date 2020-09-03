import React from 'react';

export default function Octagon({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-octagon'
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
      <path d='M8.274 3 h 7.452 l 5.274 5.274 v 7.452 l -5.274 5.274 h -7.452 l -5.274 -5.274 v -7.452 z' />
    </svg>
  );
}
