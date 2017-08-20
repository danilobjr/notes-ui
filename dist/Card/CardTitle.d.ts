/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
import { BackgroundColor, FontColor } from './../styles';
export interface CardTitleProps extends HTMLProps<HTMLHeadingElement> {
    bgColor: BackgroundColor;
    fontColor: FontColor;
}
export declare class CardTitle extends PureComponent<CardTitleProps, {}> {
    static defaultProps: CardTitleProps;
    render(): JSX.Element;
}
