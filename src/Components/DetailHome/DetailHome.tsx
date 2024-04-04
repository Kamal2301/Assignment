import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TableComponent from '../TableComponent/TableComponent';

type DetailHomeProps = {
  data: Array<any>;
};

function DetailHome(props: DetailHomeProps) {
  const {data} = props;

  const RenderUsingSwitch = (item: any) => {
    const {type} = item;

    switch (type) {
      case 'KEY_VALUE':
        return (
          <View>
            <Text style={styles.key_value_header}>{item?.heading}</Text>
            <View style={styles.container}>
              <View style={styles.table}>
                {Object.entries(item?.data).map(([key, value]) => (
                  <View style={styles.row} key={key}>
                    <Text style={styles.key}>{key}</Text>
                    <Text style={styles.value}>{value}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        );
      case 'PARAGRAPH':
        return (
          <View>
            <Text style={styles.paragraph_value_header}>{item?.data[0]}</Text>
          </View>
        );
      case 'KEY_PARAGRAPH':
        return (
          <View>
            {Object?.entries(item?.data).map(([key, value]) => (
              <View style={styles.key_paragraph_container} key={key}>
                <Text style={styles.key_paragraph_heading}>{key}</Text>
                <Text style={styles.key_paragraph_value}>
                  {typeof value === 'string' ? value : 'wrong data comming'}
                </Text>
              </View>
            ))}
          </View>
        );
      case 'TABLE':
        return (
          <View>
            <TableComponent data={item.data} />
          </View>
        );
      case 'SPECIAL':
        return (
          <View style={styles.container}>
            <Text>This data have an extra type = SPECIAL </Text>
            <View style={styles.table}>
              {Object.entries(item?.data?.BENEFIC).map(([key, value]) => (
                <View style={styles.row} key={key}>
                  <Text style={styles.key}>{key}</Text>
                  <Text style={styles.value}>{value}</Text>
                </View>
              ))}
            </View>
          </View>
        );
      default:
        break;
    }
  };

  return (
    <View style={styles.switchContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data?.map(item => {
          const Component = RenderUsingSwitch(item);
          return Component;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  switchContainer: {marginHorizontal: 16, marginTop: 10, marginBottom: 100},
  container: {
    padding: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginTop: 10,
    borderRightWidth: 1,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  key: {
    flex: 1,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  value: {
    flex: 2,
  },
  key_value_header: {fontSize: 16, fontWeight: '700', color: 'black'},
  paragraph_value_header: {
    fontSize: 13,
    fontWeight: '500',
    color: 'gray',
    lineHeight: 21,
    marginBottom: 10,
  },
  key_paragraph_container: {marginBottom: 10},
  key_paragraph_heading: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    textTransform: 'capitalize',
  },
  key_paragraph_value: {
    fontSize: 13,
    fontWeight: '500',
    color: 'gray',
    lineHeight: 21,
    marginBottom: 10,
  },
});

export default DetailHome;
