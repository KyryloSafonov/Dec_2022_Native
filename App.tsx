/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {ReactNode, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const App = (): ReactNode => {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => setUsers(json));
  };

  const renderItem = ({item, index}: {item: any; index: number}) => (
    <Text key={index}>
      {item.id} --- {item.name}
    </Text>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerItem}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.6}
              onLongPress={fetchUsers}>
              <Text>Get users</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerItem}>
            <Button title={'Hide users'} onPress={() => setUsers([])} />
          </View>
        </View>
        <View>
          <FlatList data={users} renderItem={renderItem} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerItem: {
    width: '40%',
    alignItems: 'flex-start',
  },
  button: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#64A6FA',
  },
});

export default App;
