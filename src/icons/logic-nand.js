import React from 'react';

export default function LogicNand({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-logic-nand'
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
      <path d='M22 12h-3' />
      <path d='M2 9h3' />
      <path d='M2 15h3' />
      <path d='M7 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2z' />
      <circle cx='17' cy='12' r='2' />
    </svg>
  );
}
