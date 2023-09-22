import React, {FC, useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../routes';

export const Users: FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const navigation = useNavigation<any>();

  const navigateToCurrentUser = (userId: string) =>
    navigation.navigate(Routes.CurrentUser, {
      userId,
    });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setUsers(json));
  }, []);

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => navigateToCurrentUser(item.id as string)}
        style={{
          backgroundColor: 'red',
          paddingHorizontal: 20,
          paddingVertical: 20,
          margin: 20,
        }}>
        <Text>
          {item.id} --- {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text>Users screen</Text>
      <FlatList data={users} renderItem={renderItem} />
    </View>
  );
};
