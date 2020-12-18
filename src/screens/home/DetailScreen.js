import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import moment from 'moment';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    backgroundColor: 'yellow',
  },
});

  const DetailScreen = ({ route }) => {
  console.warn(route.params?.weatherResponse);

  const handleRenderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 25 }}>
          {moment.unix(item?.dt).format('dddd')}
        </Text>

        <Text style={{ fontSize: 25 }}>{item?.temp?.day.toFixed()}&deg;C</Text>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <FlatList
        data={route.params?.weatherResponse.slice(1)}
        renderItem={handleRenderItem}
        keyExtractor={(item) => item?.dt.toString()}
      />
    </View>
  );
};

export default DetailScreen;
