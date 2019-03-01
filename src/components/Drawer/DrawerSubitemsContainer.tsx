import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLProps, PureComponent } from 'react';
import { Icon } from './../';
import { DrawerItem } from './DrawerItem';

export type DrawerSubitemsContainerProps = {
  expanded?: boolean;
  iconName?: string;
  text?: string;
} & HTMLProps<HTMLDivElement>;

export type DrawerSubitemsContainerState = {
  expanded: boolean;
};

export class DrawerSubitemsContainer extends PureComponent<DrawerSubitemsContainerProps, DrawerSubitemsContainerState> {
  static defaultProps: DrawerSubitemsContainerProps = {
    expanded: false,
    iconName: '',
    text: '',
  };

  constructor(props: DrawerSubitemsContainerProps) {
    super(props);

    this.state = {
      expanded: props.expanded,
    };
  }

  render() {
    const { children, className, expanded, iconName, text, ...otherProps } = this.props;

    return (
      <div
        className={classNames('nui-drawer-subitem-container', className)}
        {...otherProps}
      >
        <div className="content" onClick={this.handleClick}>
          <DrawerItem iconName={iconName} text={text} />

          {this.renderExpandSubitemContainerIcons()}
        </div>

        {!!this.state.expanded && children}
      </div>
    );
  }

  renderExpandSubitemContainerIcons() {
    const { children } = this.props;
    const { expanded } = this.state;

    if (!children) {
      return null;
    }

    if (expanded) {
      return <Icon name="expandLess" />;
    }

    return <Icon name="expandMore" />;
  }

  handleClick = () => {
    this.setState({ expanded: !this.state.expanded });
  }
}
