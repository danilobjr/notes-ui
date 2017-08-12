import * as React from 'react';
import { SFC } from 'react';
import { colors } from 'styles';
import { CommonProps } from './CommonProps';

export const IconMenu: SFC<CommonProps> = ({ color, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 175"
      style={style}
    >
      <g fill="none" stroke={color} strokeWidth="25">
        <path d="M0 12.5h256-3.96M0 87.5h256-3.96M0 162.5h256-3.96" />
      </g>
    </svg>
  );
};
