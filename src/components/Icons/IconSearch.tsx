import * as React from 'react';
import { SFC } from 'react';
import { colors } from 'styles';
import { CommonProps } from './CommonProps';

export const IconSearch: SFC<CommonProps> = ({ color, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 255.99996 255.99993"
      style={style}
    >
      <path
        d="m 290.50257,436.78372 a 81.473053,81.473053 0 0 0 -24.71256,58.44299 81.473053,81.473053 0 0 0 81.47452,81.47459 81.473053,81.473053 0 0 0 81.47203,-81.4721 81.473053,81.473053 0 0 0 -81.47451,-81.4745 81.473053,81.473053 0 0 0 -56.75948,23.02902 z m 120.69138,122.37489 89.25718,89.25719 -89.25718,-89.25719 z"
        fill="none"
        stroke={color}
        strokeWidth="25"
        transform="translate(-253.29 -401.255)"
      />
    </svg>
  );
};
