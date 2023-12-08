import { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "./components/Button";
import BusLines from "./components/BusLines";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {API_URL, API_TOKEN} from '@env'

import styles from "./styles";
import Header from "./components/Header";

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [isSupportActive, setIsSupportActive] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const requestSupport = async () => {
    const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': API_TOKEN
          },
      })
      console.log(response.ok)
      setIsSupportActive(response.ok)
    
    }
    
  return (
    <>
      
      <Header />
      <LinearGradient
        style={styles.container}
        colors={isSupportActive? ["#FFFFFF", "#FFE27B"] : ["#ffffff", "#AEF0FF"]}
        end={(LinearGradientPoint = { x: isSupportActive? 0.5 : 0.0, y: 1.0 })}
        onLayout={onLayoutRootView}
      >
        <View style={styles.splitView}>
          <View style={styles.leftContainer}>
            <View style={styles.content}>
              <Text
                style={{
                  fontSize: 60,
                  fontFamily: "BebasNeue",
                  color: "#002756",
                }}
              >
              {isSupportActive? 'O acompanhamento em tempo real está ativo.' : 'SISTEMA DIGITAL DE PROTEÇÃO AO CIDADÃO'}
              </Text>
              <View style={styles.buttons}>
                <Button
                  value={"Acompanhamento"}
                  btType="large"
                  btColor="blue"
                  onPress={() => requestSupport()}
                />
              </View>
            </View>
          </View>

          <View style={styles.rightContainer}>
            <BusLines value={""} />
            <View
              style={{
                padding: 20,
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Image
                style={styles.logo}
                source={require("../assets/logo.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.info}>
            Nós nos preocupamos com a sua segurança, então o botão de pânico não
            emite som quando ativado, mas a polícia será acionada para o local.
          </Text>
        </View>
      </LinearGradient>
    </>
  );
}
