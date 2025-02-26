import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";
import PopularJobCard from ".././components/common/cards/popular/PopularJobCard";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        name="Home"
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            </View>
          ),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
