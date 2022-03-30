import React from 'react';

export default function PackgeImport({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-packge-import'
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
      <path d='M12 21l-8 -4.5v-9l8 -4.5l8 4.5v4.5' />
      <path d='M12 12l8 -4.5' />
      <path d='M12 12v9' />
      <path d='M12 12l-8 -4.5' />
      <path d='M22 18h-7' />
      <path d='M18 15l-3 3l3 3' />
    </svg>
  );
}