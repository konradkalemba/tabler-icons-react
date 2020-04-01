import React from 'react';

export default function Lifebuoy({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-lifebuoy'
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
      <circle cx='12' cy='12' r='4' />
      <circle cx='12' cy='12' r='9' />
      <line x1='15' y1='15' x2='18.35' y2='18.35' />
      <line x1='9' y1='15' x2='5.65' y2='18.35' />
      <line x1='5.65' y1='5.65' x2='9' y2='9' />
      <line x1='18.35' y1='5.65' x2='15' y2='9' />
    </svg>
  );
}
