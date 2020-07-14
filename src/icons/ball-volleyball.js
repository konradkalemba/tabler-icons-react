import React from 'react';

export default function BallVolleyball({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-ball-volleyball'
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
      <circle cx='12' cy='12' r='9' />

      <path d='M12 12a8 8 0 0 0 8 4M7.5 13.5a12 12 0 0 0 8.5 6.5' />

      <path
        d='M12 12a8 8 0 0 0 8 4M7.5 13.5a12 12 0 0 0 8.5 6.5'
        transform='rotate(120 12 12)'
      />

      <path
        d='M12 12a8 8 0 0 0 8 4M7.5 13.5a12 12 0 0 0 8.5 6.5'
        transform='rotate(240 12 12)'
      />
    </svg>
  );
}
