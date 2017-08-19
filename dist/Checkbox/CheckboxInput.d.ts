/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
export interface CheckboxInputProps extends HTMLProps<HTMLDivElement> {
}
export declare class CheckboxInput extends PureComponent<CheckboxInputProps, {}> {
    static defaultProps: CheckboxInputProps;
    render(): JSX.Element;
}
