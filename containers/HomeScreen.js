import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <Text>This is the HomeScreen component</Text>
      <Button
        title="Go to Camera"
        onPress={() => {
          navigation.navigate("Camera");
        }}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
