/// <reference types="react" />
import { PureComponent } from 'react';
import { ButtonProps } from 'components';
export interface IconButtonProps extends ButtonProps {
    iconName: string;
    iconColor?: string;
}
export declare class IconButton extends PureComponent<IconButtonProps, {}> {
    render(): JSX.Element;
}
