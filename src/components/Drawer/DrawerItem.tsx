import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, PureComponent } from 'react';
import { Icon } from './../';

export type DrawerItemProps = {
  iconName?: string;
  subitem?: boolean;
  text?: string;
} & HTMLProps<HTMLDivElement>;

export class DrawerItem extends PureComponent<DrawerItemProps> {
  static defatulProps: DrawerItemProps = {
    iconName: '',
    subitem: false,
    text: '',
  };

  render() {
    const { className, iconName, subitem, text, ...otherProps } = this.props;

    return (
      <div
        className={classNames(
          'nui-drawer-item',
          { '-subitem': subitem },
          className,
        )}
        {...otherProps}
      >
        {!!iconName && (
          <Icon name={iconName} />
        )}

        <span className="text">{text}</span>
      </div>
    );
  }
}
