/// <reference types="react" />
import { PureComponent } from 'react';
import { PaperProps } from './../';
export interface ButtonProps extends PaperProps {
    flat?: boolean;
}
export declare class Button extends PureComponent<ButtonProps, {}> {
    static defaultProps: ButtonProps;
    render(): JSX.Element;
}
