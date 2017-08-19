/// <reference types="react" />
import { PureComponent, ReactNode } from 'react';
import { PaperProps } from 'components';
export interface FloatingInputProps extends PaperProps {
    leftElement?: ReactNode;
    placeholder?: string;
}
export declare class FloatingInput extends PureComponent<FloatingInputProps, {}> {
    static defaultProps: FloatingInputProps;
    render(): JSX.Element;
}
