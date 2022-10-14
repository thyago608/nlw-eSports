import {
  View,
  Modal,
  TextInput,
  ModalProps,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { useModalDuo } from "../../hooks/useModalDuo";

interface DuoMatchProps extends ModalProps {
  discord: string;
}

export function DuoMatch({ discord, ...rest }: DuoMatchProps) {
  const { handleCloseModalDuo } = useModalDuo();

  function handleConnectDuo() {
    handleCloseModalDuo();
  }

  return (
    <Modal statusBarTranslucent transparent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={handleCloseModalDuo}
          >
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <View style={styles.containerDiscord}>
            <Text style={styles.text}>Seu discord:</Text>
            <Text style={styles.myDiscord}>{discord}</Text>
          </View>
          <View style={styles.containerDiscord}>
            <Text style={styles.text}>Digite o discord do seu duo:</Text>
            <TextInput defaultValue="#" style={styles.discordDuo} />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleConnectDuo}>
            <Text style={styles.text}>Conectar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
