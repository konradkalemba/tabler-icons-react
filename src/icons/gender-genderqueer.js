import React from 'react';

export default function GenderGenderqueer({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-gender-genderqueer'
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
      <circle transform='matrix(1 0 0 -1 0 32)' cx='12' cy='16' r='5' />
      <path d='M12 11v-8' />
      <path d='M14.5 4.5l-5 3' />
      <path d='M9.5 4.5l5 3' />
    </svg>
  );
}
