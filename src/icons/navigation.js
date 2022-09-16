import React from 'react';

export default function Navigation({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-navigation'
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
      <path d='M12 18.5l7.265 2.463a0.535 .535 0 0 0 .57 -.116a0.548 .548 0 0 0 .134 -.572l-7.969 -17.275l-7.97 17.275a0.547 .547 0 0 0 .135 .572a0.535 .535 0 0 0 .57 .116l7.265 -2.463' />
    </svg>
  );
}
