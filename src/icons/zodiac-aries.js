import React from 'react';

export default function ZodiacAries({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-zodiac-aries'
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
      <path d='M12 5 a5 5 0 1 0 -4 8' />
      <path d='M16 13a5 5 0 1 0 -4 -8' />
      <path d='M12 21 v -16' />
    </svg>
  );
}
