import * as React from 'react';
import { SFC } from 'react';
import { colors } from 'styles';
import { CommonProps } from './CommonProps';

export const IconPlus: SFC<CommonProps> = ({ color, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      style={style}
    >
      <g stroke={color} strokeWidth="25" fill="none">
        <path d="M0 127.5h256M127.5 0v256" />
      </g>
    </svg>
  );
};
