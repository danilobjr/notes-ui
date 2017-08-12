import * as React from 'react';
import { SFC } from 'react';
import { colors } from 'styles';
import { CommonProps } from './CommonProps';

export const IconList: SFC<CommonProps> = ({ color, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 257 145"
      style={style}
    >
      <path
        fill={color}
        d="M55 0h202v25H55zM0 0h25v25H0zM0 60h25v25H0zM0 120h25v25H0zM55 60h202v25H55zM55 120h202v25H55z"
      />
    </svg>
  );
};
