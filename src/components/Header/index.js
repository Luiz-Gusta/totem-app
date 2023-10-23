import { StatusBar } from "expo-status-bar";
import { View, Image, Text } from "react-native";
import { useState, useEffect } from "react";

import { SafeAreaView } from 'react-native-safe-area-context';
import dayjs from "dayjs";

import styles from "./styles";


export default function Header() {

  const [date, setDate] = useState(dayjs())

  useEffect(() => {
    setInterval(() => {
      setDate(dayjs());
    }, 1000* 1)
  }, [])
  
  async () => {
    try {
      const resp = await fetch('https://api.hgbrasil.com/weather?key=SUA-CHAVE&city_name=Caraguatatuba,SP')
      
    } catch (error) {
      
    }
  }

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
              <Text style={styles.label}>22ºC</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
