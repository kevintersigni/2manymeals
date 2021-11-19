import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./containers/HomeScreen";
import ProductScreen from "./containers/ProductScreen";
import CameraScreen from "./containers/CameraScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [productScanned, setProductScanned] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera">
          {() => <CameraScreen setProductScanned={setProductScanned} />}
        </Stack.Screen>

        <Stack.Screen name="Product">
          {() => <ProductScreen productScanned={productScanned} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
