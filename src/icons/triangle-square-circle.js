import React from 'react';

export default function TriangleSquareCircle({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-triangle-square-circle'
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
      <path d='M12 3l-4 7h8z' />
      <circle cx='17' cy='17' r='3' />
      <rect x='4' y='14' width='6' height='6' rx='1' />
    </svg>
  );
}
