/// <reference types="react" />
import { PureComponent } from 'react';
import { PaperProps } from 'components';
export interface AppBarProps extends PaperProps {
    hideToggleDrawerIconButton?: boolean;
    toggleDrawerIconColor?: string;
    onToggleDrawerClick?: () => void;
}
export declare class AppBar extends PureComponent<AppBarProps, {}> {
    static defaultProps: AppBarProps;
    render(): JSX.Element;
    renderTitle(): JSX.Element;
    renderToggleDrawerIconButton(): JSX.Element;
    handleToggleDrawerClick: () => void;
}
