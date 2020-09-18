import React from 'react';

export default function DeviceMobileRotated({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-device-mobile-rotated'
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
      <g transform='rotate(90 12 12)'>
        <rect x='7' y='4' width='10' height='16' rx='1' />
        <line x1='11' y1='5' x2='13' y2='5' />
        <line x1='12' y1='17' x2='12' y2='17.01' />
      </g>
    </svg>
  );
}
