import * as React from 'react';
import * as omit from 'lodash.omit';
import { PureComponent } from 'react';
import { Paper, PaperProps, IconButton } from './../';

export interface AppBarProps extends PaperProps {
  hideToggleDrawerIconButton?: boolean;
  toggleDrawerIconColor?: string;
  onToggleDrawerClick?: () => void;
}

export class AppBar extends PureComponent<AppBarProps> {
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
      <Paper className="nui-app-bar" {...otherProps}>
        {this.renderToggleDrawerIconButton()}
        {this.renderTitle()}
      </Paper>
    );
  }

  renderTitle() {
    const { title } = this.props;

    return title
      ? <h1 className="title">{title}</h1>
      : null;
  }

  renderToggleDrawerIconButton() {
    const { hideToggleDrawerIconButton, toggleDrawerIconColor } = this.props;

    if (hideToggleDrawerIconButton) {
      return null;
    }

    return (
      <IconButton
        className="icon"
        iconColor={toggleDrawerIconColor}
        iconName="menu"
        flat
        onClick={this.props.onToggleDrawerClick}
      />
    );
  }
}
