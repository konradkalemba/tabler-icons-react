import React from 'react';

export default function BoxSeam({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-box-seam'
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
      <path d='M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5' />
      <path d='M12 12l8 -4.5' />
      <path d='M8.2 9.8l7.6 -4.6' />
      <path d='M12 12v9' />
      <path d='M12 12l-8 -4.5' />
    </svg>
  );
}
