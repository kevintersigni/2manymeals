import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "@react-native-community/slider";
import { Button, Image, StyleSheet, Text, View } from "react-native";

const ProductScreen = ({ productScanned }) => {
  const [productData, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let tab = [];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://world.openfoodfacts.org/api/v0/product/${productScanned}`
        );
        setProductData(response.data.product);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>ça vient !</Text>
      ) : (
        <View>
          <Image
            style={{ height: 200, resizeMode: "contain" }}
            source={{
              uri: productData.image_url,
            }}
          />
          <Text>Marque : {productData.brands}</Text>
          <Text>Nom du produit : {productData.product_name}</Text>
          <Text>Valeurs nutri pour 100g</Text>
          <Text>Glucides : {productData.nutriments.carbohydrates_100g}</Text>

          <Text>
            Fibres :{" "}
            {productData.nutriments.fiber_100g
              ? productData.nutriments.fiber_100g
              : 0}
          </Text>
          <Text>
            Glucides corrigés :
            {productData.nutriments.carbohydrates_100g -
              productData.nutriments.fiber_100g}
          </Text>

          <Text>Protéines : {productData.nutriments.proteins_100g}</Text>

          <Text>Lipides : {productData.nutriments.fat_100g}</Text>
          <View>
            <Text>
              Catégorie principale:{productData.categories.split(",")[0]}
            </Text>
          </View>
          <View>
            <Text>Rayons :</Text>
            {productData.categories.split(",").map((cat, index) => {
              return <Text key={index}>{cat}</Text>;
            })}
          </View>

          <View>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={200}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
              step={1}
              value={100}
            />
          </View>
        </View>
      )}
    </View>
  );
};
export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
