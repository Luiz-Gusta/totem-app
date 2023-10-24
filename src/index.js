import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

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
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </LinearGradient>
      </View>
    </>
  );
}
