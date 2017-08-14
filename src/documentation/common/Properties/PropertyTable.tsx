import * as React from 'react';
import { CSSProperties, HTMLProps, SFC } from 'react';

const componentStyle = {
  base: {
    width: '100%',
    textAlign: 'left',
    borderCollapse: 'collapse',
  },
  headers: {
    padding: '8px 10px',
    fontWeight: 400,
    borderTop: '1px solid',
    borderBottom: '2px solid',
  } as CSSProperties,
};

export interface PropertyTableProps extends HTMLProps<HTMLTableElement> { }

export const PropertyTable: SFC<PropertyTableProps> = ({ children }) => (
  <table style={componentStyle.base}>
    <thead>
      <tr>
        <th style={componentStyle.headers}>Name</th>
        <th style={componentStyle.headers}>Type</th>
        <th style={componentStyle.headers}>Default</th>
        <th style={componentStyle.headers}>Description</th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

PropertyTable.displayName = 'PropertyTable';
