import React from 'react';

export default function MoodSick({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-mood-sick'
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
      <path d='M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z' />
      <path d='M9 10h-.01' />
      <path d='M15 10h-.01' />
      <path d='M8 16l1 -1l1.5 1l1.5 -1l1.5 1l1.5 -1l1 1' />
    </svg>
  );
}
