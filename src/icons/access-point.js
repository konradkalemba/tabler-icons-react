import React from 'react';

export default function AccessPoint({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-access-point'
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
      <line x1='12' y1='12' x2='12' y2='12.01' />
      <path d='M14.828 9.172a4 4 0 0 1 0 5.656' />
      <path d='M17.657 6.343a8 8 0 0 1 0 11.314' />
      <path d='M9.168 14.828a4 4 0 0 1 0 -5.656' />
      <path d='M6.337 17.657a8 8 0 0 1 0 -11.314' />
    </svg>
  );
}
