import React from 'react';

export default function LogicAnd({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-logic-and'
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
      <path d='M22 12h-5' />
      <path d='M2 9h5' />
      <path d='M2 15h5' />
      <path d='M9 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2z' />
    </svg>
  );
}
