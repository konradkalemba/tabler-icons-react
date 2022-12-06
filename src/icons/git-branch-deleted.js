import React from 'react';

export default function GitBranchDeleted({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-git-branch-deleted'
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
      <circle cx='7' cy='18' r='2' />
      <circle cx='7' cy='6' r='2' />
      <path d='M7 8v8' />
      <path d='M9 18h6a2 2 0 0 0 2 -2v-5' />
      <path d='M14 14l3 -3l3 3' />
      <path d='M15 4l4 4' />
      <path d='M15 8l4 -4' />
    </svg>
  );
}
