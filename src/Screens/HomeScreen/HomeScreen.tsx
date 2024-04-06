import React, {Fragment, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DetailHome from '../../Components/DetailHome/DetailHome';
import HomeTabHeader from '../../Components/HomeTabHeader/HomeTabHeader';
import SubHomeTab from '../../Components/SubHomeTab/SubHomeTab';

function HomeScreen() {
  const [data, setData] = useState<any>('');
  const [isLoading, setIsLoading] = useState(true);
  const [textValue, setTextValue] = useState<Array<string>>([]);
  const [selected, setSelected] = useState(textValue[0]);

  useEffect(() => {
    fetch('https://harpreetcd.github.io/reactnative.json')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setSelected(Object?.keys(json)[0]);
        setTextValue(Object?.keys(json));
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const showTab = Array.isArray(data[selected]);

  return (
    <Fragment>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              {textValue?.map((_item, index) => {
                return (
                  <HomeTabHeader
                    key={index}
                    item={_item}
                    selected={selected}
                    setSelected={setSelected}
                  />
                );
              })}
            </ScrollView>
          </View>
          <View style={{flex: 1}}>
            {showTab ? (
              <DetailHome data={data[selected] ?? []} />
            ) : selected !== '' && data[selected] ? (
              <SubHomeTab data={data[selected] ?? {}} />
            ) : (
              <Fragment />
            )}
          </View>
        </View>
      )}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  subContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    backgroundColor: '#ADD8E6',
    borderBottomWidth: 1,
    elevation: 1,
  },
});

export default HomeScreen;
