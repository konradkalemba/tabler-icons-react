import React from 'react';

export default function ZodiacGemini({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-zodiac-gemini'
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
      <path d='M3 3a21 21 0 0 0 18 0' />
      <path d='M3 21a21 21 0 0 1 18 0' />
      <line x1='7' y1='4.5' x2='7' y2='19.5' />
      <line x1='17' y1='4.5' x2='17' y2='19.5' />
    </svg>
  );
}
