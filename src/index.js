import { useCallback, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "./components/Button";
import BusLines from "./components/BusLines";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { API_URL } from "@env";

import styles from "./styles";
import Header from "./components/Header";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isSupportActive, setIsSupportActive] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue.ttf"),
  });

  const [token, setToken] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const requestSupport = async () => {
    //console.log(token)
    const response = await fetch(`${API_URL}/api/v1/assistances/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
    console.log(response.ok)
    setIsSupportActive(response.ok);
  };

  async function fetchData() {
    try {
    const response = await fetch(`${API_URL}/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: "spot@email.com",
          password: "123456",
        },
      }),
    }) .then((response) => response.json())
       .then((json) => setToken(json.token))

  } catch (error) {
    console.error("Erro ao obter token:", error);
    
  }
  }

  return (
    <>
      <Header />
      <LinearGradient
        style={styles.container}
        colors={
          isSupportActive ? ["#FFFFFF", "#FFE27B"] : ["#ffffff", "#AEF0FF"]
        }
        end={(LinearGradientPoint = { x: isSupportActive ? 0.5 : 0.0, y: 1.0 })}
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
                {isSupportActive
                  ? "O acompanhamento em tempo real está ativo."
                  : "SISTEMA DIGITAL DE PROTEÇÃO AO CIDADÃO"}
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
