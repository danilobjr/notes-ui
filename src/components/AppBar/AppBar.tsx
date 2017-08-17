import * as React from 'react';
import * as Radium from 'radium';
import * as omit from 'lodash.omit';
import { CSSProperties, PureComponent } from 'react';
import { Paper, PaperProps, IconButton } from 'components';
import { BackgroundColor } from 'styles';

const componentStyle = {
  base: {
    display: 'flex',
    width: '100%',
    minHeight: 64,
    backgroundColor: BackgroundColor.White,
    alignItems: 'center',
    zIndex: 10000,
  },
  icon: {
    marginLeft: 11,
  },
  title: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 11,
    fontSize: 24,
    fontWeight: 400,
  } as CSSProperties,
};

const getStyle = (style, props) => ([
  style.base,
  props.style,
]);

export interface AppBarProps extends PaperProps {
  hideToggleDrawerIconButton?: boolean;
  toggleDrawerIconColor?: string;
  onToggleDrawerClick?: () => void;
}

@Radium
export class AppBar extends PureComponent<AppBarProps, {}> {
  static defaultProps: AppBarProps = {
    onToggleDrawerClick: () => { return; },
  };

  render() {
    const { ...otherProps } = omit(this.props, [
      'toggleDrawerIconColor',
      'hideToggleDrawerIconButton',
      'style',
      'onToggleDrawerClick',
    ]);

    return (
      <Paper
        style={getStyle(componentStyle, this.props)}
        {...otherProps}
      >
        {this.renderToggleDrawerIconButton()}
        {this.renderTitle()}
      </Paper>
    );
  }

  renderTitle() {
    const { title } = this.props;

    return title
      ? <h1 style={componentStyle.title}>{title}</h1>
      : null;
  }

  renderToggleDrawerIconButton() {
    const { hideToggleDrawerIconButton, toggleDrawerIconColor } = this.props;

    if (hideToggleDrawerIconButton) {
      return null;
    }

    return (
      <IconButton
        style={componentStyle.icon}
        iconColor={toggleDrawerIconColor}
        iconName="menu"
        flat
        onClick={this.handleToggleDrawerClick.bind(this)}
      />
    );
  }

  handleToggleDrawerClick() {
    this.props.onToggleDrawerClick();
  }
}
