import React from 'react';

export default function InboxOff({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-inbox-off'
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
      <path d='M8 4h10a2 2 0 0 1 2 2v10m-.593 3.422a1.994 1.994 0 0 1 -1.407 .578h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.056 .59 -1.418' />
      <path d='M4 13h3l3 3h4l.987 -.987m2.013 -2.013h3' />
      <path d='M3 3l18 18' />
    </svg>
  );
}
