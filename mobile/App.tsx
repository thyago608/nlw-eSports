import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { Loading } from "./src/components/Loading";
import { ModalDuoProvider } from "./src/context/ModalContext";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <ModalDuoProvider>
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </Background>
    </ModalDuoProvider>
  );
}
