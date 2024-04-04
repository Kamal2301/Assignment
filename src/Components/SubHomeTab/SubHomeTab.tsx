import React, {Fragment, useEffect, useState} from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import DetailHome from '../DetailHome/DetailHome';
import HomeTabHeader from '../HomeTabHeader/HomeTabHeader';

type SubHomeTabProps = {
  data: any;
};

function SubHomeTab(props: SubHomeTabProps) {
  const {data: _item} = props;

  const _subData = Object.keys(_item) ?? [];

  const [selected, setSelectd] = useState(_subData[0]);
  const showTab = Array.isArray(_item[selected]);

  return (
    <Fragment>
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.subcontainer}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {_subData?.map((_item, index) => {
              return (
                <HomeTabHeader
                  item={_item}
                  selected={selected}
                  setSelectd={setSelectd}
                />
              );
            })}
          </ScrollView>
        </View>
        {showTab ? (
          <DetailHome data={_item[selected] ?? []} />
        ) : (
          <SubHomeTab data={_item} />
        )}
      </View>
    </Fragment>
  );
}
const styles = StyleSheet.create({
  subcontainer: {
    flexDirection: 'row',
    paddingTop: 15,
    backgroundColor: '#ADD8E6',
    borderBottomWidth: 1,
    elevation: 1,
  },
});

export default SubHomeTab;
