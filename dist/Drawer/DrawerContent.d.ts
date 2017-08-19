/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
export interface DrawerContentProps extends HTMLProps<HTMLDivElement> {
    iconName?: string;
    open?: boolean;
    text?: string;
}
export interface DrawerContentState {
    open: boolean;
}
export declare class DrawerContent extends PureComponent<DrawerContentProps, DrawerContentState> {
    static defatulProps: DrawerContentProps;
    constructor(props: DrawerContentProps);
    render(): JSX.Element;
}
