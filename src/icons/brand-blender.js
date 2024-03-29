import React from 'react';

export default function BrandBlender({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-blender'
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
      <ellipse cx='15' cy='14' rx='6' ry='5' />
      <circle cx='15' cy='14' r='1' />
      <path d='M3 16l9 -6.5' />
      <path d='M6 9h9' />
      <path d='M13 5l5.65 5' />
    </svg>
  );
}
