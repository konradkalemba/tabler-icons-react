import React from 'react';

export default function AsteriskSimple({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-asterisk-simple'
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
      <path d='M12 12v-9' />
      <path d='M12 12l-9 -2.5' />
      <path d='M12 12l9 -2.5' />
      <path d='M12 12l6 8.5' />
      <path d='M12 12l-6 8.5' />
    </svg>
  );
}
