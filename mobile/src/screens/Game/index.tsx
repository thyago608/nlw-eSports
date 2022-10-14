import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { Entypo } from "@expo/vector-icons";

import logoImg from "../../assets/logo-nlw-esports.png";
import { IGameCard } from "../../interfaces/GameCard";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../../components/Header";
import { DuoCard } from "../../components/DuoCard";
import { Duo } from "../../interfaces/Duo";
import { DuoMatch } from "../../components/DuoMatch";
import { useModalDuo } from "../../hooks/useModalDuo";

export function Game() {
  const route = useRoute();
  const game = route.params as IGameCard;

  const navigation = useNavigation();
  const [duos, setDuos] = useState<Duo[]>([]);
  const { handleCloseModalDuo, handleOpenModalDuo, modalOpen } = useModalDuo();

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`http://192.168.15.12:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity onPress={handleGoBack}>
                <Entypo
                  name="chevron-thin-left"
                  color={THEME.COLORS.CAPTION_300}
                  size={20}
                />
              </TouchableOpacity>
              <Image source={logoImg} style={styles.logo} />
              <View style={styles.right} />
            </View>

            <Image
              source={{ uri: game.bannerUrl }}
              style={styles.cover}
              resizeMode="cover"
            />
            <Heading
              title={game.title}
              subtitle="Conecte-se e comece a jogar!"
            />
            <FlatList
              data={duos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <DuoCard data={item} onConnect={handleOpenModalDuo} />
              )}
              horizontal={true}
              style={styles.containerList}
              contentContainerStyle={
                duos.length > 0 ? styles.contentList : styles.emptyListContent
              }
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={() => (
                <Text style={styles.emptyText}>
                  {" "}
                  Não há anúncios publicados ainda.
                </Text>
              )}
            />
          </View>
          <DuoMatch
            onRequestClose={handleCloseModalDuo}
            visible={modalOpen}
            discord="#thyago608"
          />
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
