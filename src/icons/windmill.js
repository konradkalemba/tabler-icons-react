import React from 'react';

export default function Windmill({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-windmill'
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
      <path d='M12 12c2.76 0 5 -2.01 5 -4.5s-2.24 -4.5 -5 -4.5v9z' />
      <path d='M12 12c0 2.76 2.01 5 4.5 5s4.5 -2.24 4.5 -5h-9z' />
      <path d='M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9z' />
      <path d='M12 12c0 -2.76 -2.01 -5 -4.5 -5s-4.5 2.24 -4.5 5h9z' />
    </svg>
  );
}
