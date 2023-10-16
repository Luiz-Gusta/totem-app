import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import styles from "./styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerFlex}>
        <View style={styles.headerContent}>
          <Text style={styles.label}>07:30</Text>
        </View>

        <View style={styles.weatherContent}>
        <Image
              style={styles.icon}
              source={require("../../../assets/icon.png")}
            />
          <View style={styles.headerContent}>
            <Text style={styles.label}>22ºC</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
