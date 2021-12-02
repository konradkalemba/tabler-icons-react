import React from 'react';

export default function BrandGit({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-git'
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
      <circle cx='16' cy='12' r='1' />
      <circle cx='12' cy='8' r='1' />
      <circle cx='12' cy='16' r='1' />
      <path d='M12 15v-6' />
      <path d='M15 11l-2 -2' />
      <path d='M11 7l-1.9 -1.9' />
      <path d='M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z' />
    </svg>
  );
}
