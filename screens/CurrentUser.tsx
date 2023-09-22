import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

export const CurrentUser: FC = () => {
  const [user, setUser] = useState<any>(null);
  const {
    params: {userId},
  } = useRoute<any>();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(json => setUser(json));
  }, [userId]);

  if (!user) return null;

  return (
    <View>
      <Text>Current user is:</Text>
      <Text>
        {user.id} --- {user.name}
      </Text>
    </View>
  );
};
