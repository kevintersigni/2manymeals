import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is the SplashScreen component</Text>
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
