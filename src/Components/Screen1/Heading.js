/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import moment from 'moment';


export default function Heading({currentWeather}) {
  console.log(currentWeather);

  return (
    <SafeAreaView>
      <View>
        <Text style={style.text}>Kathmandu </Text>
        <Text style={style.text}>
        {moment.unix(currentWeather?.dt).format('dddd')}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  text: {
    fontSize: 40,
    color: 'yellow',
    textAlign: 'center',
  },
});
