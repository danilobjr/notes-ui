/// <reference types="react" />
import { PureComponent } from 'react';
import { DrawerContentProps } from './DrawerContent';
export interface DrawerItemProps extends DrawerContentProps {
    iconName?: string;
    text: string;
    subitem?: boolean;
}
export declare class DrawerItem extends PureComponent<DrawerItemProps, {}> {
    render(): JSX.Element;
}
