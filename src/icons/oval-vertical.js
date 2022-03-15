import React from 'react';

export default function OvalVertical({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-oval-vertical'
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
      <ellipse
        transform='matrix(0 -1 -1 0 24 24)'
        cx='12'
        cy='12'
        rx='6'
        ry='9'
      />
    </svg>
  );
}
