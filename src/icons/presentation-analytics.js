import React from 'react';

export default function PresentationAnalytics({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-presentation-analytics'
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
      <path d='M9 12v-4' />
      <path d='M15 12v-2' />
      <path d='M12 12v-1' />
      <path d='M3 4h18' />
      <path d='M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10' />
      <path d='M12 16v4' />
      <path d='M9 20h6' />
    </svg>
  );
}
