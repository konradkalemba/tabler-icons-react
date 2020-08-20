import React from 'react';

export default function Comet({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-comet'
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
      <path d='M15.5 18.5l-3 1.5l.5-3.5-2-2 3-.5 1.5-3 1.5 3 3 .5-2 2 .5 3.5z' />
      <line x1='4' y1='4' x2='11' y2='11' />
      <line x1='9' y1='4' x2='12.5' y2='7.5' />
      <line x1='4' y1='9' x2='7.5' y2='12.5' />
    </svg>
  );
}
