import React from 'react';

export default function ChartArcs({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-chart-arcs'
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
      <circle cx='12' cy='12' r='1' />
      <path d='M16.924 11.132a5 5 0 1 0 -4.056 5.792' />
      <path d='M3 12a9 9 0 1 0 9 -9' />
    </svg>
  );
}
