import React from 'react';

export default function ZodiacVirgo({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-zodiac-virgo'
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
      <path d='M3 4a2 2 0 0 1 2 2v9' />
      <path d='M5 6a2 2 0 0 1 4 0v9' />
      <path d='M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5' />
      <path d='M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0' />
    </svg>
  );
}
