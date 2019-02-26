import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
import { IconExpandMore } from './IconExpandMore';
import { IconExpandLess } from './IconExpandLess';
import { IconFile } from './IconFile';
import { IconList } from './IconList';
import { IconMenu } from './IconMenu';
import { IconPlus } from './IconPlus';
import { IconSearch } from './IconSearch';
import { FontColor } from './../styles';

const icons = {
  expandMore: IconExpandMore,
  expandLess: IconExpandLess,
  file: IconFile,
  list: IconList,
  menu: IconMenu,
  plus: IconPlus,
  search: IconSearch,
};

const componentStyle = {
  base: {
    width: 20,
    height: 20,
  },
};

export interface IconProps extends HTMLProps<HTMLElement> {
  name: string;
  color?: string;
}

export class Icon extends PureComponent<IconProps, {}> {
  static defaultProps: Partial<IconProps> = {
    color: FontColor.Gray,
  };

  render() {
    const { style, name, color, ...otherProps } = this.props;

    return React.createElement(icons[name], {
      style: Object.assign({}, componentStyle.base, style),
      color,
      ...otherProps,
    });
  }
}
