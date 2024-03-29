import React from 'react';

export default function BrandGoogleDrive({
  size = 24,
  color = 'currentColor',
  ...restProps
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-brand-google-drive'
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
      <path d='M12 10l-6 10l-3 -5l6 -10z' />
      <path d='M9 15h12l-3 5h-12' />
      <path d='M15 15l-6 -10h6l6 10z' />
    </svg>
  );
}
