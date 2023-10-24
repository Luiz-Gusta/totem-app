import { StatusBar } from "expo-status-bar";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

import { SafeAreaView } from 'react-native-safe-area-context';
import dayjs from "dayjs";

import styles from "./styles";


export default function Header() {

  const [date, setDate] = useState(dayjs())
  const [weather, setWeather] = useState()
  

   const getWeather= async() => {
    try {
      const resp = await fetch('https://api.weatherapi.com/v1/current.json?key=be6c0f48ed444370a7c225024232310&q=caraguatatuba')
      const current = await resp.json()
      const currentWeather = current.current.temp_c
      console.log(currentWeather)
      setWeather(currentWeather)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setInterval(() => {
      setDate(dayjs());
    }, 1000* 1)

    getWeather()
  }, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerFlex}>
          <View style={styles.headerContent}>
            <Text style={styles.label}>{date.format("HH:mm")}</Text>
          </View>

          <View style={styles.weatherContent}>
            <Image
              style={styles.icon}
              source={require("../../../assets/weather.png")}
            />
            <View style={styles.headerContent}>
              <Text style={styles.label}>{Math.trunc(weather)}ºC</Text>
            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
