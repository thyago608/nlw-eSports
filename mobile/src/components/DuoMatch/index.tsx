import { View, Modal, ModalProps, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../theme";

interface DuoMatchProps extends ModalProps {
  discord: string;
}

export function DuoMatch({ discord, ...rest }: DuoMatchProps) {
  return (
    <Modal statusBarTranslucent transparent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <Text style={styles.discord}>{discord}</Text>
        </View>
      </View>
    </Modal>
  );
}
