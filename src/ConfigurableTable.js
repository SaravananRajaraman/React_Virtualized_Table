import React from 'react';
import { Column, Table } from 'react-virtualized';
import { injectGlobal } from 'emotion';

export default class ConfigurableTable extends React.Component {
  rowRenderer(props) {
    console.log(props);
    const {
      className,
      columns,
      index,
      key,
      onRowClick,
      onRowDoubleClick,
      onRowMouseOut,
      onRowMouseOver,
      onRowRightClick,
      rowData,
      style
    } = props;
    console.log(columns);
    return (
      <div className={className} key={key} role="row" style={style}>
        {columns.map((column, index) => column)}
      </div>
    );
  }

  render() {
    const { rows, columns } = this.props;
    return (
      <Table
        disableHeader={false}
        width={columns.length * 100}
        height={3000}
        headerHeight={20}
        rowRenderer={this.rowRenderer}
        // headerRowRenderer={this.headerRowRenderer()}
        rowHeight={30}
        rowCount={rows.length}
        rowGetter={({ index }) => {
          // console.log(index, rows[index].data);
          return rows[index].data;
        }}
      >
        {columns.map(column => {
          // console.log(column);
          return (
            <Column
              width={column.collWidth + 20}
              label={column.label}
              dataKey={column.id}
            />
          );
        })}
      </Table>
    );
  }
}

// TODO: customize here or pass `className`,
// `headerClassName` etc to `Table` and `Column`
injectGlobal`
.ReactVirtualized__Table__headerRow {
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.ReactVirtualized__Table__row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.ReactVirtualized__Table__headerTruncatedText {
  display: inline-block;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.ReactVirtualized__Table__headerColumn,
.ReactVirtualized__Table__rowColumn {
  margin-right: 10px;
  min-width: 0px;
}
.ReactVirtualized__Table__rowColumn {
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ReactVirtualized__Table__headerColumn:first-of-type,
.ReactVirtualized__Table__rowColumn:first-of-type {
  margin-left: 10px;
}
.ReactVirtualized__Table__sortableHeaderColumn {
  cursor: pointer;
}

.ReactVirtualized__Table__sortableHeaderIconContainer {
  display: flex;
  align-items: center;
}
.ReactVirtualized__Table__sortableHeaderIcon {
  flex: 0 0 24px;
  height: 1em;
  width: 1em;
  fill: currentColor;
}
`;
