import React from 'react';

export default function WaveSine({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-wave-sine'
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
      <path d='M21 12 h -2 c -0.894 0 -1.662 -0.857 -1.761 -2 c -0.296 -3.45 -0.749 -6 -2.749 -6 s -2.5 3.582 -2.5 8 s -0.5 8 -2.5 8 s -2.452 -2.547 -2.749 -6 c -0.1 -1.147 -0.867 -2 -1.763 -2 h -2' />
    </svg>
  );
}
