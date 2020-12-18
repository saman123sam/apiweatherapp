import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  weather: {
    fontSize: 38,
    color: 'yellow',
  },
  verticalLines: {
    height: 60,
    width: 2,
    backgroundColor: 'gray',
  },
});
const Temperature = ({ weatherrespond }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.weather}>
        {weatherrespond?.temp?.day.toFixed(0)}&deg;C
      </Text>

      <View style={styles.verticalLines} />

      <Text style={styles.weather}>{weatherrespond?.weather[0]?.main}</Text>
    </View>
  );
};

export default Temperature;
