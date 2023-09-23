import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {CurrentUserRouteProps} from '../routes/types';
import {Routes} from '../routes';

export const CurrentUser: FC = () => {
  const [user, setUser] = useState<any>(null);
  const {
    params: {userId, pageId, title},
  } = useRoute<CurrentUserRouteProps<Routes.CurrentUser>>();

  console.log(userId, 'userId');
  console.log(pageId, 'pageId');
  console.log(title, 'title');

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
