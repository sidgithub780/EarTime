import { LogBox } from "react-native";
import { useFonts } from "expo-font";

LogBox.ignoreLogs(["Overwriting fontFamily style attribute preprocessor"]);

export const LoadFonts = () => {
  return useFonts({
    "Axiforma-Regular": require("../assets/Axiforma-Regular.ttf"),
    "Axiforma-Bold": require("../assets/Axiforma-Bold.ttf"),
  });
};
