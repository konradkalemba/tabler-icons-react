import React from 'react';

export default function DragDrop2({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-drag-drop-2'
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
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M16 8v-4h-12v12.01h4' stroke-dasharray='.001 4' />
      <rect x='8' y='8' width='12' height='12' rx='2' />
    </svg>
  );
}
