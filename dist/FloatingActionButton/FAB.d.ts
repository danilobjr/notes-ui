/// <reference types="react" />
import { PureComponent } from 'react';
import { IconButtonProps } from './../';
export interface FABProps extends IconButtonProps {
}
export declare class FAB extends PureComponent<FABProps, {}> {
    static defaultProps: Partial<FABProps>;
    render(): JSX.Element;
}
