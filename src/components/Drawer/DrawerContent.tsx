import * as React from 'react';
import { omit } from 'lodash';
import { HTMLProps, PureComponent } from 'react';
import { Icon } from './../';

const componentStyle = {
  base: {
    flex: 1,
    display: 'flex',
    height: 54,
    alignItems: 'center',
  },
  mainIcon: {
    marginLeft: 25,
  },
  text: {
    flex: 1,
    marginLeft: 25,
  },
};

const getStyle = (style, props) => ([
  style.base,
  props.style,
]);

export interface DrawerContentProps extends HTMLProps<HTMLDivElement> {
  iconName?: string;
  open?: boolean;
  text?: string;
}

export interface DrawerContentState {
  open: boolean;
}

export class DrawerContent extends PureComponent<DrawerContentProps, DrawerContentState> {
  static defatulProps: DrawerContentProps = {
    iconName: '',
    open: false,
    text: '',
  };

  constructor(props: DrawerContentProps) {
    super(props);

    this.state = {
      open: props.open,
    };
  }

  render() {
    const { iconName, text, ...otherProps } = omit(this.props, ['style']);

    return (
      <div
        // style={getStyle(componentStyle, this.props)}
        className="nui-drawer-content"
        {...otherProps}
      >
        {!!iconName && (
          <Icon
            style={componentStyle.mainIcon}
            name={iconName}
          />
        )}

        <span style={componentStyle.text}>{text}</span>
      </div>
    );
  }
}
