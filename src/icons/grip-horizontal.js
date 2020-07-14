import React from 'react';

export default function GripHorizontal({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-grip-horizontal'
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
      <circle cx='5' cy='9' r='1' />
      <circle cx='5' cy='15' r='1' />
      <circle cx='12' cy='9' r='1' />
      <circle cx='12' cy='15' r='1' />
      <circle cx='19' cy='9' r='1' />
      <circle cx='19' cy='15' r='1' />
    </svg>
  );
}
