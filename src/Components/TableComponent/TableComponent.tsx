import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type TableComponentProps = {
  data: any;
};

function TableComponent(props: TableComponentProps) {
  const {data} = props;
  const renderTableHeader = (headers: any) => (
    <View style={styles.header}>
      {headers.map((header: any) => (
        <Text style={styles.headerText} key={header}>
          {header.toUpperCase()}
        </Text>
      ))}
    </View>
  );

  const renderTableRows = (rowData: any) =>
    rowData.map((item: any, index: number) => (
      <View style={styles.row} key={index}>
        {Object.values(item).map((value, idx) => (
          <Text style={styles.cell} key={idx}>
            {value}
          </Text>
        ))}
      </View>
    ));

  const tableData = data;

  const headers = Object.keys(tableData[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{data[0].heading}</Text>
      {renderTableHeader(headers)}
      {renderTableRows(tableData)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 13,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  cell: {
    flex: 1,
    margin: 2,
    fontSize: 12,
  },
});

export default TableComponent;
