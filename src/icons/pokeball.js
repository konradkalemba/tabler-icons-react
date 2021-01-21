import React from 'react';

export default function Pokeball({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-pokeball'
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
      <circle cx='9' cy='9' r='9' transform='translate(3 3)' />
      <circle cx='12' cy='12' r='3' />
      <path d='M3 12h6m6 0h6' />
    </svg>
  );
}
