import React from 'react';

export default function StackPop({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-stack-pop'
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
      <path d='M7 9.5l-3 1.5l8 4l8 -4l-2.999 -1.5' />
      <path d='M4 15l8 4l8 -4' />
      <path d='M12 11v-7' />
      <path d='M9 7l3 -3l3 3' />
    </svg>
  );
}
