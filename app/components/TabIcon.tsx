import { images } from "@/constants/images";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

export default function TabIcon({ focused, icon, title }: any) {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full gap-2 flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} className="size-5" tintColor="#000000"/>
        <Text className="text-secondary text-base font-semibold">{title}</Text>
      </ImageBackground>
    );
  }

  return (
    <View className="size-full justify-center items-center mt-4 rounded-full">
      <Image source={icon} tintColor="#A8B5DB" />
    </View>
  );
}
