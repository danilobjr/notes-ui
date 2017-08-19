/// <reference types="react" />
import { PureComponent } from 'react';
import { PaperProps } from 'components';
export interface ModalProps extends PaperProps {
    noBackdrop?: boolean;
    open: boolean;
    onClose?: () => void;
}
export declare class Modal extends PureComponent<ModalProps, {}> {
    static defaultProps: Partial<ModalProps>;
    render(): JSX.Element;
}
