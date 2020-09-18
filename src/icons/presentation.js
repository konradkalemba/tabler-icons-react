import React from 'react';

export default function Presentation({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-presentation'
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
      <line x1='3' y1='4' x2='21' y2='4' />
      <path d='M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10' />
      <line x1='12' y1='16' x2='12' y2='20' />
      <line x1='9' y1='20' x2='15' y2='20' />
      <path d='M8 12l3 -3l2 2l3 -3' />
    </svg>
  );
}
