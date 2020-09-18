import React from 'react';

export default function Click({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-click'
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
      <line x1='3' y1='12' x2='6' y2='12' />
      <line x1='12' y1='3' x2='12' y2='6' />
      <line x1='7.8' y1='7.8' x2='5.6' y2='5.6' />
      <line x1='16.2' y1='7.8' x2='18.4' y2='5.6' />
      <line x1='7.8' y1='16.2' x2='5.6' y2='18.4' />
      <path d='M12 12l9 3l-4 2l-2 4l-3 -9' />
    </svg>
  );
}
