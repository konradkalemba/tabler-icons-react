import React from 'react';

export default function BracketsContain({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brackets-contain'
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
      <path d='M7 4h-4v16h4' />
      <path d='M17 4h4v16h-4' />
      <path d='M8 16h.01' />
      <path d='M12 16h.01' />
      <path d='M16 16h.01' />
    </svg>
  );
}
