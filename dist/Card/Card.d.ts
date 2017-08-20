/// <reference types="react" />
import { PureComponent } from 'react';
import { PaperProps } from './../';
import { BackgroundColor } from './../styles';
export interface CardProps extends PaperProps {
    color?: BackgroundColor;
    image?: string;
    title?: string;
}
export declare class Card extends PureComponent<CardProps, {}> {
    render(): JSX.Element;
    renderTitle(): JSX.Element;
}
