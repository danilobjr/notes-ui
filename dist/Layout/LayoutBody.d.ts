/// <reference types="react" />
import { HTMLProps, PureComponent, ReactNode } from 'react';
export interface LayoutBodyProps extends HTMLProps<HTMLDivElement> {
    drawerOpen: boolean;
    drawerItems: ReactNode | ReactNode[];
}
export declare class LayoutBody extends PureComponent<LayoutBodyProps, {}> {
    render(): JSX.Element;
}
