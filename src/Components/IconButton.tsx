import React from 'react';
import {ImageResizeMode, ImageSourcePropType, Pressable} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import scaler from '../Utils/scaler';

type IconButtonProps = {
  type?: 'MaterialCommunityIcons' | 'Image';
  dark?: boolean;
  name?: string;
  source?: ImageSourcePropType;
  resizeMode?: ImageResizeMode;
};

function IconButton(
  props: IconButtonProps & Omit<IconProps, 'onPress' | 'name'> & TouchProps,
) {
  const {
    type = 'MaterialCommunityIcons',
    color,
    iconVariant = 'black',
    size = scaler(24),
    borderRadius = (size * 1.5) / 2,
    name,
    backgroundColor,
    ...touchProps
  } = props;

  return (
    <Pressable
      justifyContent={'center'}
      alignItems={'center'}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      {...touchProps}>
      {name && (
        <MaterialCommunityIcons
          name={name}
          size={size}
          color={color ? color : iconVariant}
        />
      )}
    </Pressable>
  );
}

export default IconButton;
