import React from 'react';

export default function Hexagon({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-hexagon'
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
      <path d='M12.971 3.54l6 3.333A2 2 0 0120 8.62v6.536a2 2 0 0 1 -1.029 1.748l-6 3.333a2 2 0 0 1 -1.942 0l-6-3.333A2 2 0 014 15.157V8.62a2 2 0 0 1 1.029 -1.748l6-3.333a2 2 0 0 1 1.942 0z' />
    </svg>
  );
}
