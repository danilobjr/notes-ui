/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
export declare type Elevation = 0 | 1 | 2 | 3;
export interface PaperProps extends HTMLProps<HTMLDivElement> {
    elevation?: Elevation;
}
export declare class Paper extends PureComponent<PaperProps, {}> {
    static defaultProps: PaperProps;
    render(): JSX.Element;
}
