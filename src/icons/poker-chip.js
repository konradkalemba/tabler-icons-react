import React from 'react';

export default function PokerChip({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-poker-chip'
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
      <circle cx='12' cy='12' r='9' />
      <circle cx='12' cy='12' r='5' />
      <path d='M12 3v4' />
      <path d='M12 17v4' />
      <path d='M3 12h4' />
      <path d='M17 12h4' />
      <path d='M18.364 5.636l-2.828 2.828' />
      <path d='M8.464 15.536l-2.828 2.828' />
      <path d='M5.636 5.636l2.828 2.828' />
      <path d='M15.536 15.536l2.828 2.828' />
    </svg>
  );
}
