import * as React from 'react';
import { CSSProperties, PureComponent } from 'react';
import { FontColor } from 'styles';

const componentStyle = {
  td: {
    padding: '8px 10px',
    fontWeight: 100,
  } as CSSProperties,
  name: {
    color: FontColor.Blue,
  } as CSSProperties,
  type: {
    color: FontColor.Red,
  },
  defaultValue: {
    color: FontColor.Gray,
  },
};

export interface PropertyProps {
  defaultValue?: string;
  description?: string;
  name: string;
  type: string;
}

export class Property extends PureComponent<PropertyProps, {}> {
  render() {
    const { defaultValue, description, name, type } = this.props;

    return (
      <tr>
        <td style={{ ...componentStyle.td, ...componentStyle.name }}>{name}</td>
        <td style={{ ...componentStyle.td, ...componentStyle.type }}>{type}</td>
        <td style={{ ...componentStyle.td, ...componentStyle.defaultValue }}>{defaultValue}</td>
        <td style={componentStyle.td}>{description}</td>
      </tr>
    );
  }
}
