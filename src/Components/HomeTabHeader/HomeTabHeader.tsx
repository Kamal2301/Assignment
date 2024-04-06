import React, {Fragment} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type HomeTabHeaderProps = {
  item: string;
  selected: string;
  setSelected: any;
};

function HomeTabHeader(props: HomeTabHeaderProps) {
  const {item: _item, selected, setSelected} = props;
  return (
    <Pressable
      onPress={() => {
        setSelected(_item);
      }}>
      <View
        style={[
          styles.container,
          {borderBottomWidth: selected === _item ? 2 : 0},
        ]}>
        <Text
          style={[
            styles.heading,
            {color: selected === _item ? 'black' : 'gray'},
          ]}>
          {_item}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    marginHorizontal: 10,
    backgroundColor: '#B1D4E5',
  },
  heading: {
    paddingBottom: 10,
    marginHorizontal: 15,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
});

export default HomeTabHeader;
