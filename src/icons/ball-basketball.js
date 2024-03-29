import React from 'react';

export default function BallBasketball({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-ball-basketball'
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
      <line x1='5.65' y1='5.65' x2='18.35' y2='18.35' />
      <line x1='5.65' y1='18.35' x2='18.35' y2='5.65' />
      <path d='M12 3a9 9 0 0 0 9 9' />
      <path d='M3 12a9 9 0 0 1 9 9' />
    </svg>
  );
}
