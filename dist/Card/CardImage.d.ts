/// <reference types="react" />
import { HTMLProps, PureComponent } from 'react';
export interface CardImageProps extends HTMLProps<HTMLDivElement> {
    url: string;
}
export declare class CardImage extends PureComponent<CardImageProps, {}> {
    render(): JSX.Element;
}
