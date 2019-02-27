import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { Paper, PaperProps, IconButton } from './../';
import { FontColor } from 'components/styles';

export type AppBarProps = {
  // TODO: rename this to hideToggleDrawerButton
  hideToggleDrawerIconButton?: boolean;
  toggleDrawerIconColor?: FontColor;
  // TODO: rename: onClickToggleDrawerButton
  onToggleDrawerClick?: () => void;
} & PaperProps;

export const AppBar: SFC<AppBarProps> = ({
    className,
    hideToggleDrawerIconButton,
    toggleDrawerIconColor,
    onToggleDrawerClick,
    title,
    ...otherProps }) => (
  <Paper className={classNames('nui-app-bar', className)} {...otherProps}>
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

AppBar.displayName = 'AppBar';

AppBar.defaultProps = {
  hideToggleDrawerIconButton: false,
  toggleDrawerIconColor: FontColor.Gray,
  onToggleDrawerClick: () => { return; },
};
