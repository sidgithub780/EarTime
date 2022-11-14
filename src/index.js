import { ActivityIndicator, StyleSheet, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import Screen from "../components/Screen";
import { LinearGradient } from "expo-linear-gradient";
import { LoadFonts } from "../functions/LoadFonts";
import Song from "../components/Song";
import { Audio } from "expo-av";

const index = () => {
  let [fontsLoaded] = LoadFonts();
  const [sound, setSound] = useState();

  async function playSound(audioName) {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require(`../assets/songs/vine_boom.mp3`)
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  if (!fontsLoaded) {
    return (
      <Screen>
        <ActivityIndicator />
      </Screen>
    );
  }

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={["#1e1e1e", "#0D433B"]}
      style={{ flex: 1 }}
    >
      <Screen>
        <Text style={styles.textStyle}>EarTime</Text>
        <ScrollView style={{ flex: 1 }}>
          <Song songName="vine boom" playSound={playSound} />
        </ScrollView>
      </Screen>
    </LinearGradient>
  );
};

export default index;

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontFamily: "Axiforma-Bold",
    fontSize: 35,
    marginBottom: 20,
  },
});
