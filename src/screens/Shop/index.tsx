import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as S from "./styles";

import axios from "axios";
import { useNavigation } from "@react-navigation/native";
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
  const [games, setGames] = useState<Games[]>([]);
  const [resize, setResize] = useState<
    "cover" | "contain" | "stretch" | "repeat" | "center" | undefined
  >("cover");

  const { navigate } = useNavigation();

  const getData = useCallback(async () => {
    await axios.get("https://zelda-api.apius.cc/api/games").then((response) => {
      const data = response.data.data;

      setGames(data);
    });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const changeResize = useCallback(() => {
    setResize((state) => (state === "cover" ? "contain" : "cover"));
  }, []);

  const navigateToGame = useCallback(
    (item: Games) => {
      navigate("Game", { item });
    },
    [games]
  );

  const Item = (item: Games) => {
    const url = imageUrl(item.name);

    return (
      <S.GameContainer onPress={() => navigateToGame(item)} delayPressIn={1}>
        <S.GameImage resizeMode={resize} source={{ uri: url }} />
        <S.ResizeButton onPress={changeResize}>
          <Ionicons name="ios-resize" size={24} color="#FFFF" />
        </S.ResizeButton>
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
      />
    </S.Container>
  );
};

export default Shop;
