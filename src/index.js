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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text
              style={{
                fontSize: 40,
                fontFamily: "BebasNeue",
                color: "#002756",
              }}
            >
              Para qual serviço deseja ligar?
            </Text>
            <View style={styles.modalButtons}>
              <Button
                value={"Policia Militar"}
                btType={"small"}
                btColor={"blue"}
                onPress={() => console.log("aaa")}
              />
              <Button
                value={"Samu"}
                btType={"small"}
                btColor={"blue"}
                onPress={() => console.log("aaa")}
              />
              <Button
                value={"Bombeiros"}
                btType={"small"}
                btColor={"blue"}
                onPress={() => console.log("aaa")}
              />
              <Button
                value={"Central de Atendimento à mulher"}
                btType={"small"}
                btColor={"blue"}
                onPress={() => console.log("aaa")}
              />
              <Button
                value={"Defesa Cívil"}
                theme="btGrey"
                onPress={() => console.log("aaa")}
              />
              <Button
                value={"Denunciar violações de direitos humanos"}
                btType={"small"}
                btColor={"blue"}
                onPress={() => console.log("aaa")}
              />
            </View>
            <View style={styles.bottomBottom}>
              <Button
                value={"Cancelar"}
                btType={"small"}
                btColor={"lightGrey"}
                textColor="grey"
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>

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
                  onPress={() => console.log("aaa")}
                />
                <Button
                  value={"Emergência"}
                  btType="large"
                  btColor="lightGrey"
                  textColor={"grey"}
                  onPress={() => setModalVisible(true)}
                />
              </View>
            </View>
          </View>

          <View style={styles.rightContainer}>
            <BusLines value={""} onPress={() => console.log("aaa")} />
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
