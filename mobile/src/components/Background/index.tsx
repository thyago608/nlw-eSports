import { ReactNode } from "react";
import { ImageBackground } from "react-native";
import backgroundImg from "../../assets/background-galaxy.png";
import { styles } from "./styles";

interface BackgroundProps {
  children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground
      source={backgroundImg}
      style={styles.container}
      defaultSource={backgroundImg}
    >
      {children}
    </ImageBackground>
  );
}
