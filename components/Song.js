import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

const Song = (props) => {
  return (
    <Pressable
      style={{
        backgroundColor: "#2e4341",
        marginBottom: 10,
        borderRadius: 30,
        padding: 30,
      }}
      onPress={props.playSound}
    >
      <Text style={styles.textStyle}>{props.songName}</Text>
    </Pressable>
  );
};

export default Song;

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontFamily: "Axiforma-Regular",
    fontSize: 20,
  },
});
