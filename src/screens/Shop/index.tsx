import React, { useCallback, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as S from "./styles";

import imageUrl from "../../utils/imageUrl";

export interface Games {
  _id: string;
  name: string;
  description: string;
  developer: string;
  publisher: string;
  released_date: string;
}

const Shop: React.FC = () => {
  const [games, setGames] = useState<Games[] | null>(null);
  const [resize, setResize] = useState<
    "cover" | "contain" | "stretch" | "repeat" | "center" | undefined
  >("cover");

  const { navigate } = useNavigation();

  const getData = useCallback(async () => {
    await axios.get("https://zelda-api.apius.cc/api/games").then((response) => {
      const data = response.data.data;

      setGames(data);
    });

    if (games !== null) {
      storeData();
    }
  }, []);

  async function storeData() {
    const data = JSON.stringify(games);

    try {
      await AsyncStorage.setItem("@zelda_Data", data);
    } catch (e) {
      return;
    }
  }

  useEffect(() => {
    async function verifiedData() {
      const value = await AsyncStorage.getItem("@zelda_Data");

      if (value !== null) {
        const data = JSON.parse(value);

        setGames(data);
      } else {
        getData();
      }
    }

    verifiedData();
  }, []);

  const changeResize = useCallback(() => {
    setResize((state) => (state === "cover" ? "contain" : "cover"));
  }, []);

  const navigateToGame = useCallback(
    async (item: Games) => {
      navigate("Game", { item });
    },
    [games]
  );

  const navigateToCharacters = useCallback(() => {
    navigate("Characters");
  }, []);

  const Empty = () => {
    return (
      <S.LoadingContainer>
        <S.LoadingText>Loading...</S.LoadingText>
        <S.Loading size="large" color="#FFF" />
      </S.LoadingContainer>
    );
  };

  const Item = (item: Games) => {
    const url = imageUrl(item.name);

    return (
      <S.GameContainer>
        <S.GameButton delayPressIn={1} onPress={() => navigateToGame(item)}>
          <S.GameImage resizeMode={resize} source={{ uri: url }} />
          <S.ResizeButton onPress={changeResize}>
            <Ionicons name="ios-resize" size={24} color="#FFFF" />
          </S.ResizeButton>
        </S.GameButton>
        <S.GameName>{item.name}</S.GameName>
      </S.GameContainer>
    );
  };

  return (
    <S.Container>
      <S.Title>Zelda Games</S.Title>
      <S.SmallText>Browse all zelda games</S.SmallText>
      <S.GamesList
        data={games}
        keyExtractor={(item: any) => item._id}
        renderItem={({ item }: any) => <Item {...item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => <Empty />}
      />
      <S.Button onPress={navigateToCharacters}>
        <S.Text>See Characters</S.Text>
      </S.Button>
    </S.Container>
  );
};

export default Shop;
