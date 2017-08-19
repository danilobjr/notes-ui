/// <reference types="react" />
import * as React from 'react';
import { HTMLProps, PureComponent } from 'react';
export interface PropsTransformer extends HTMLProps<HTMLDivElement> {
    onChange?: any;
}
export interface CheckboxProps extends PropsTransformer {
    onChange?: (checked: boolean) => void;
}
export interface CheckboxState {
    checked: boolean;
}
export declare class Checkbox extends PureComponent<CheckboxProps, CheckboxState> {
    static defaultProps: CheckboxProps;
    state: CheckboxState;
    constructor(props: CheckboxProps);
    componentWillReceiveProps(nextProps: CheckboxProps): void;
    render(): JSX.Element;
    handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
