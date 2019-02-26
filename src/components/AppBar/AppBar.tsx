import * as React from 'react';
import { omit } from 'lodash';
import { PureComponent } from 'react';
import { Paper, PaperProps, IconButton } from './../';
import { FontColor } from 'components/styles';

export interface AppBarProps extends PaperProps {
  hideToggleDrawerIconButton?: boolean;
  toggleDrawerIconColor?: string;
  onToggleDrawerClick?: () => void;
}

export class AppBar extends PureComponent<AppBarProps> {
  static defaultProps: AppBarProps = {
    hideToggleDrawerIconButton: false,
    toggleDrawerIconColor: FontColor.Gray,
    onToggleDrawerClick: () => { return; },
  };

  render() {
    const {
      hideToggleDrawerIconButton,
      toggleDrawerIconColor,
      onToggleDrawerClick,
      title,
      ...otherProps
    } = omit(this.props, ['style']);

    return (
      <Paper className="nui-app-bar" {...otherProps}>
        {!hideToggleDrawerIconButton && (
          <IconButton
            className="icon"
            iconColor={toggleDrawerIconColor}
            iconName="menu"
            flat
            onClick={onToggleDrawerClick}
          />
        )}

        {!!title && (
          <h1 className="title">{title}</h1>
        )}
      </Paper>
    );
  }
}
