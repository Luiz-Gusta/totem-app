import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Button from "./components/Button";

import styles from "./styles";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <LinearGradient
          colors={['#ffffff', '#AEF0FF']}
          end={LinearGradientPoint = { x: 0.0, y: 1.0 }}
        >
          <View style={styles.splitView}>
            <View style={styles.leftContainer}>
              <Text>SISTEMA DIGITAL DE PROTEÇÃO AO CIDADÃO</Text>
              <View style={styles.buttons}>
                <Button value={'fazer ligação'} onPress={() => console.log('aaa')}/>
                <Button value={'Emergência'} onPress={() => console.log('aaa')}/>
              </View>
            </View>
            <View style={styles.rightContainer}>
              
            </View>
          </View>
          <StatusBar style="auto" />
        </LinearGradient>
      </View>
    </>
  );
}
