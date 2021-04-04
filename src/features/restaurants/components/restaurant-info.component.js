import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Kaštan",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return <Text>{name}</Text>;
};
