import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../routes';

export const Home: FC = () => {
  const navigaton = useNavigation<any>();
  const navigateToUsersScreen = () => navigaton.navigate(Routes.Users);

  return (
    <View>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={{
          width: '50%',
          backgroundColor: 'red',
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}
        onPress={navigateToUsersScreen}>
        <Text>Go to Users Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
