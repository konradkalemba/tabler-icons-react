import React from 'react';

export default function Wifi({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-wifi'
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
      <g transform='rotate(-45 12 18)'>
        <line x1='12' y1='18' x2='12.01' y2='18' />
        <path d='M12 14a4 4 0 0 1 4 4' />
        <path d='M12 10a8 8 0 0 1 8 8' />
        <path d='M12 6a12 12 0 0 1 12 12' />
      </g>
    </svg>
  );
}
