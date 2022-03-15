import React from 'react';

export default function Usb({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-usb'
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
      <circle cx='12' cy='19' r='2' />
      <path d='M12 17v-11.5' />
      <path d='M7 10v3l5 3' />
      <path d='M12 14.5l5 -2v-2.5' />
      <path d='M16 10h2v-2h-2z' />
      <circle cx='7' cy='9' r='1' />
      <path d='M10 5.5h4l-2 -2.5z' />
    </svg>
  );
}
