import React from 'react';

export default function ChartDonut4({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-chart-donut-4'
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
      <path d='M8.848 14.667l-3.348 2.833' />
      <path d='M12 3v5m4 4h5' />
      <circle cx='12' cy='12' r='9' />
      <path d='M14.219 15.328l2.781 4.172' />
      <circle cx='12' cy='12' r='4' />
    </svg>
  );
}
