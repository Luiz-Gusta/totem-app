import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./styles";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}
