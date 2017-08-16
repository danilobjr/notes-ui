import * as React from 'react';
import { CSSProperties, SFC } from 'react';
import { Icon } from 'components';

const componentStyle = {
  base: {
    display: 'flex',
    margin: '50px 0 70px',
    justifyContent: 'space-around',
  } as CSSProperties,
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  } as CSSProperties,
  name: {
    fontSize: 14,
    marginTop: 10,
  },
};

export const Icons: SFC<any> = () => (
  <div style={componentStyle.base}>
    <div style={componentStyle.container}>
      <Icon name="expandLess"></Icon>
      <span style={componentStyle.name}>expandLess</span>
    </div>
    <div style={componentStyle.container}>
      <Icon name="expandMore"></Icon>
      <span style={componentStyle.name}>expandMore</span>
    </div>
    <div style={componentStyle.container}>
      <Icon name="file"></Icon>
      <span style={componentStyle.name}>file</span>
    </div>
    <div style={componentStyle.container}>
      <Icon name="list"></Icon>
      <span style={componentStyle.name}>list</span>
    </div>
    <div style={componentStyle.container}>
      <Icon name="menu"></Icon>
      <span style={componentStyle.name}>menu</span>
    </div>
    <div style={componentStyle.container}>
      <Icon name="plus"></Icon>
      <span style={componentStyle.name}>plus</span>
    </div>
    <div style={componentStyle.container}>
      <Icon name="search"></Icon>
      <span style={componentStyle.name}>search</span>
    </div>
  </div>
);

Icons.displayName = 'Icons';
