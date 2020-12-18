import React, { useState, useEffect } from 'react';
import {View, StyleSheet,TouchableOpacity, Text,ActivityIndicator,Image} from 'react-native';


import { useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';

import Temperature from '../../Components/Screen1/Temperature';
import Heading from '../../Components/Screen1/Heading';
// import ReloadIcon from '../../Components/ReloadIcon';


const styles = StyleSheet.create({
  flexRoot: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  picture:{
    height: 400,
    width: 300,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

const latitude = 27.6704163;
const longitude = 85.3239504;

const HomeScreen = ({ navigation }) => {
  const [weatherResponse, setWeatherResponse] = useState([]);
  const [CurrentWeather, setCurrentWeather] = useState();
  const [isFetching, setIsFetching] = useState();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    async function getWeather() {
      try {
        setIsFetching(true);
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=metric&appid=8be8c8bfd274b521f87a7c0fa7761112`
        );
        setIsFetching(false);
        setWeatherResponse(data?.daily);
        setCurrentWeather(data?.current);
      } catch (e) {
        console.warn(e);
      }
    }

    getWeather();
  }, []);

  const icon = CurrentWeather?.weather[0]?.icon;
  const handlePress = () => navigation.navigate('Details', { weatherResponse });

  return (
    <View style={styles.flexRoot}>
      <View style={styles.container}>
        <Heading currentWeather={CurrentWeather} />
        {/* <ReloadIcon /> */}

        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <View style={[styles.flexRoot, { paddingBottom: insets.bottom }]}>
            <Image style={styles.picture} source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }} />
            <Temperature weatherrespond={weatherResponse[0]} />
            <View>
              <TouchableOpacity
                style={{
                  borderWidth: 8,
                  borderRadius: 1,
                  padding: 5,
                  borderColor: 'yellow',
                  marginTop: 20,
                }}
                onPress={handlePress}
              >
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  Weekly Forecast
                </Text>
              </TouchableOpacity>
            </View>
          </View>
           )}
      </View>
    </View>
  );
};

export default HomeScreen;
