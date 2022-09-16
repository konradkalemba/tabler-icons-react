import React from 'react';

export default function AddressBookOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-address-book-off'
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
      <path d='M8 4h10a2 2 0 0 1 2 2v10m-.57 3.399c-.363 .37 -.87 .601 -1.43 .601h-10a2 2 0 0 1 -2 -2v-12' />
      <path d='M10 16h6' />
      <path d='M11 11a2 2 0 0 0 2 2m2 -2a2 2 0 0 0 -2 -2' />
      <path d='M4 8h3' />
      <path d='M4 12h3' />
      <path d='M4 16h3' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
