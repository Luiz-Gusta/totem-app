import { useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Modal } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Button from "./components/Button";
import ButtonSmall from "./components/ButtonSmall";
import BusLines from "./components/BusLines";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import styles from "./styles";
import Header from "./components/Header";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    'BebasNeue': require('../assets/fonts/BebasNeue.ttf'),
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
          setModalVisible(false)
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={{ fontSize: 40, fontFamily: 'BebasNeue', color: '#002756' }}>Para qual serviço deseja ligar?</Text>
            <View style={styles.modalButtons}>
              <ButtonSmall value={'Policia Militar'} onPress={() => console.log('aaa')} />
              <ButtonSmall value={'Samu'} onPress={() => console.log('aaa')} />
              <ButtonSmall value={'Bombeiros'} onPress={() => console.log('aaa')} />
              <ButtonSmall value={'Central de Atendimento à mulher'} onPress={() => console.log('aaa')} />
              <ButtonSmall value={'Defesa Cívil'} onPress={() => console.log('aaa')} />
              <ButtonSmall value={'Denunciar violações de direitos humanos'} onPress={() => console.log('aaa')} />
            </View>
            <ButtonSmall value={'Cancelar'} color='#EEEEEE' onPress={() => console.log('aaa')}/>
          </View>
        </View>
      </Modal>

      <Header />
      <LinearGradient
        style={styles.container}
        colors={['#ffffff', '#AEF0FF']}
        end={LinearGradientPoint = { x: 0.0, y: 1.0 }}
        onLayout={onLayoutRootView}
      >
        <View style={styles.splitView}>

          <View style={styles.leftContainer}>

            <View style={styles.content}>
              <Text style={{ fontSize: 60, fontFamily: 'BebasNeue', color: '#002756' }}>SISTEMA DIGITAL DE PROTEÇÃO AO CIDADÃO</Text>
              <View style={styles.buttons}>
                <Button value={'fazer ligação'} onPress={() => console.log('aaa')} />
                <Button value={'Emergência'} onPress={() => console.log('aaa')} />
              </View>
            </View>
          </View>

          <View style={styles.rightContainer}>
            <BusLines value={''} onPress={() => console.log('aaa')} />
            <View style={{ padding: 20, flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
              <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>
          </View>
        </View>
        <View style={styles.infoView}>
          <Text style={styles.info}>Nós nos preocupamos com a sua segurança, então o botão de pânico não emite som quando ativado, mas a polícia será acionada para o local.</Text>
        </View>

      </LinearGradient>
    </>
  );
}
