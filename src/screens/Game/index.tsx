import React, { useCallback, useContext, useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);

  const { item } = route.params as Params;

  async function verifiedFavorites() {
    const value = await AsyncStorage.getItem("@zelda_Favorite");

    if (value !== null) {
      const data = JSON.parse(value);

      setFavorites([...data]);
    }
  }

  useEffect(() => {
    verifiedFavorites();
  }, []);

  const deleteFavorite = useCallback(async () => {
    setLoading(true);
    await favorites.forEach(async (favorite: string, index: number) => {
      if (favorite === item._id) {
        const array: string[] = favorites;
        array.splice(index, 1);
        setFavorites((state: any) => state.splice(index, 1));

        await AsyncStorage.setItem("@zelda_Favorite", JSON.stringify(array));
      }
    });
    setLoading(false);
  }, [favorites]);

  const addHeart = useCallback(async () => {
    const array: string[] = favorites;
    array.push(...array, item._id);
    setFavorites((state: any) => [...state, item._id]);

    await AsyncStorage.setItem("@zelda_Favorite", JSON.stringify(array));
  }, [favorites]);

  const onHeartChange = useCallback(async () => {
    const id = item._id;

    favorites.includes(id) ? deleteFavorite() : addHeart();
  }, [favorites]);

  const verifiedHeart = useCallback(() => {
    const id = item._id;
    if (favorites.includes(id)) {
      return true;
    } else {
      return false;
    }
  }, [favorites]);

  return (
    <S.Container>
      <S.BackgroundImage source={{ uri: imageUrl(item.name) }} />
      <S.HeartButton onPress={() => onHeartChange()}>
        {loading === true ? (
          <S.Loading size="small" color="red" />
        ) : (
          <Ionicons
            name={verifiedHeart() === true ? "ios-heart" : "ios-heart-empty"}
            size={35}
            color={verifiedHeart() === true ? "red" : "red"}
          />
        )}
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
