/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
export interface DrawerSubitemsContainerProps extends HTMLProps<HTMLDivElement> {
    expanded?: boolean;
    iconName?: string;
    text?: string;
}
export interface DrawerSubitemsContainerState {
    expanded: boolean;
}
export declare class DrawerSubitemsContainer extends PureComponent<DrawerSubitemsContainerProps, DrawerSubitemsContainerState> {
    static defaultProps: DrawerSubitemsContainerProps;
    constructor(props: DrawerSubitemsContainerProps);
    render(): JSX.Element;
    renderExpandSubitemContainerIcons(): JSX.Element;
    handleClick: () => void;
}
