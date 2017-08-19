/// <reference types="react" />
import { HTMLProps, PureComponent, ReactNode } from 'react';
export interface LayoutProps extends HTMLProps<HTMLDivElement> {
    title?: string;
    drawerItems?: ReactNode | ReactNode[];
}
export interface LayoutState {
    drawerOpen: boolean;
}
export declare class Layout extends PureComponent<LayoutProps, LayoutState> {
    static defaultProps: LayoutProps;
    constructor(props: LayoutProps);
    render(): JSX.Element;
    toggleDrawer(): void;
}
