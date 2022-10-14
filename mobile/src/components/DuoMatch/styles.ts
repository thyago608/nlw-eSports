import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: THEME.COLORS.OVERLAY,
  },
  content: {
    width: 311,
    backgroundColor: THEME.COLORS.SHAPE,
    paddingBottom: 45,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 30,
    width: 150,
    height: 36,
    borderRadius: 3,
    backgroundColor: THEME.COLORS.PRIMARY,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  containerDiscord: {
    marginVertical: 15,
    alignItems: "center",
  },
  discordDuo: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.MD,
    borderBottomWidth: 1,
    borderColor: THEME.COLORS.PRIMARY,

    width: 150,
    height: 40,
  },
  myDiscord: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: 16,
  },
  text: {
    color: THEME.COLORS.TEXT,
    fontSize: 18,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  closeIcon: {
    alignSelf: "flex-end",
    margin: 16,
  },
});
