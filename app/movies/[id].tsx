import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Details() {
  // Corrected: You need to assign the result of useLocalSearchParams() to the destructured 'id'
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Corrected: The 'id' variable needs to be inside the curly braces */}
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}> Movie Id : {id} </Text>
    </View>
  );
}
