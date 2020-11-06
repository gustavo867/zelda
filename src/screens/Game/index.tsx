import React, { useCallback, useContext, useEffect } from "react";
import * as S from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Games } from "../Shop";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import imageUrl from "../../utils/imageUrl";
import { FavoriteContext } from "../../context/FavoritesContext";

interface Params {
  item: Games;
}

const Game: React.FC = () => {
  const route = useRoute();

  const [favorites, setFavorites] = useContext<any>(FavoriteContext);

  const { item } = route.params as Params;

  async function verifiedFavorites() {
    const value = await AsyncStorage.getItem("@zelda_Favorite");

    if (value !== null) {
      const data = JSON.parse(value);

      setFavorites(data);
    }
  }

  useEffect(() => {
    verifiedFavorites();
  }, []);

  useEffect(() => {
    async function handleData() {
      const data = JSON.stringify(favorites);

      await AsyncStorage.setItem("@zelda_Favorite", data);
    }
    handleData();
  }, [favorites]);

  const deleteFavorite = useCallback(async () => {
    await favorites.forEach(async (favorite: string, index: number) => {
      if (favorite === item._id) {
        favorites.length === 0
          ? setFavorites([])
          : setFavorites(favorites.splice(index));
      }

      return;
    });
  }, [favorites]);

  const onHeartChange = useCallback(() => {
    const id = item._id;

    favorites.includes(id)
      ? deleteFavorite()
      : setFavorites([...favorites, item._id]);
  }, [favorites]);

  const verifiedHeart = useCallback(() => {
    if (favorites.includes(item._id)) {
      return true;
    } else {
      return false;
    }
  }, [favorites]);

  return (
    <S.Container>
      <S.BackgroundImage source={{ uri: imageUrl(item.name) }} />
      <S.HeartButton onPress={onHeartChange}>
        <Ionicons
          name={verifiedHeart() ? "ios-heart" : "ios-heart-empty"}
          size={28}
          color={verifiedHeart() ? "red" : "#FFFFFFFF"}
        />
      </S.HeartButton>
      <S.Title>{item.name}</S.Title>
      <S.BottomContainer>
        <S.BoldText>Description</S.BoldText>
        <S.Description>{item.description}</S.Description>
        <S.Row>
          <S.BoldText>Release Date: </S.BoldText>
          <S.Description>{item.released_date}</S.Description>
        </S.Row>
        <S.Row>
          <S.BoldText>Developer: </S.BoldText>
          <S.Description>{item.developer}</S.Description>
        </S.Row>
        <S.Row>
          <S.BoldText>Publisher: </S.BoldText>
          <S.Description>{item.publisher}</S.Description>
        </S.Row>
      </S.BottomContainer>
    </S.Container>
  );
};

export default Game;
