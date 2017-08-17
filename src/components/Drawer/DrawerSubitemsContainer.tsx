import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { CSSProperties, HTMLProps, PureComponent, PropTypes } from 'react';
import { Icon } from 'components';
import { DrawerContent } from './DrawerContent';
import { DrawerItemColor } from 'styles';

const componentStyle = {
  base: {
    cursor: 'pointer',
    userSelect: 'none',
  },
  rootItem: {
    display: 'flex',
    alignItems: 'center',

    ':hover': {
      backgroundColor: DrawerItemColor.Hover,
    },

    ':active': {
      backgroundColor: DrawerItemColor.Active,
    },
  } as CSSProperties,
  expandIcon: {
    width: 16,
    margin: '0 18px',
  },
};

const getStyle = (style, props) => ([
  style.base,
  props.style,
]);

export interface DrawerSubitemsContainerProps extends HTMLProps<HTMLDivElement> {
  expanded?: boolean;
  iconName?: string;
  text?: string;
}

export interface DrawerSubitemsContainerState {
  expanded: boolean;
}

@Radium
export class DrawerSubitemsContainer extends PureComponent<DrawerSubitemsContainerProps, DrawerSubitemsContainerState> {
  static defaultProps: DrawerSubitemsContainerProps = {
    expanded: false,
    iconName: '',
    text: '',
  };

  constructor(props: DrawerSubitemsContainerProps) {
    super(props);

    this.state = {
      expanded: props.expanded,
    };
  }

  render() {
    const { children, expanded, iconName, text, ...otherProps } = omit(this.props, ['style']);

    return (
      <div
        style={getStyle(componentStyle, this.props)}
        {...otherProps}
      >
        <div
          style={componentStyle.rootItem}
          onClick={this.handleClick}
        >
          <DrawerContent iconName={iconName} text={text} />

          {this.renderExpandSubitemContainerIcons()}
        </div>

        {expanded && children}
      </div>
    );
  }

  renderExpandSubitemContainerIcons() {
    const { children } = this.props;
    const { expanded } = this.state;

    if (!children) {
      return null;
    }

    if (expanded) {
      return <Icon style={componentStyle.expandIcon} name="expandLess" />;
    }

    return <Icon style={componentStyle.expandIcon} name="expandMore" />;
  }

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  }
}
