import { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "./components/Button";
import BusLines from "./components/BusLines";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import styles from "./styles";
import Header from "./components/Header";

SplashScreen.preventAutoHideAsync();

const requestSupport = () => {
  console.log('ok')
  fetch('//', {
      cache: 'no-store',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          code: '311',
          latitude: '-23.717299',
          longitude: '-45.440373'
      })
  })
  console.log('ok2')
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

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

  return (
    <>
      
      <Header />
      <LinearGradient
        style={styles.container}
        colors={["#ffffff", "#AEF0FF"]}
        end={(LinearGradientPoint = { x: 0.0, y: 1.0 })}
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
                SISTEMA DIGITAL DE PROTEÇÃO AO CIDADÃO
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
