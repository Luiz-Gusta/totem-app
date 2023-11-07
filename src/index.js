import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Button from "./components/Button";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import styles from "./styles";
import Header from "./components/Header";

SplashScreen.preventAutoHideAsync();

export default function App() {

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
      <Header />
      <LinearGradient
        style={styles.container}
        colors={['#ffffff', '#AEF0FF']}
        end={LinearGradientPoint = { x: 0.0, y: 1.0 }}
      >
        <View style={styles.splitView}>
          
          <View style={styles.leftContainer}>

            <View style={styles.content}>
            <Text style={{fontSize: 60, fontFamily: 'BebasNeue', color: '#002756'}}>SISTEMA DIGITAL DE PROTEÇÃO AO CIDADÃO</Text>
            <View style={styles.buttons}>
              <Button value={'fazer ligação'} onPress={() => console.log('aaa')} />
              <Button value={'Emergência'} onPress={() => console.log('aaa')} />
            </View>
            </View>
          </View>

          <View style={styles.rightContainer}>
            <Text>SISTEMA DIGITAL DE PROTEÇÃO AO CIDADÃO</Text>
            <View style={styles.buttons}>
              <Button value={'fazer ligação'} onPress={() => console.log('aaa')} />
            </View>
          </View>
        </View>
      </LinearGradient>
    </>
  );
}
