import React, { useCallback, useContext } from "react";
import * as S from "./styles";

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

  const onHeartChange = useCallback(() => {
    const id = item._id;

    favorites.includes(id)
      ? favorites.forEach((favorite: string, index: number) => {
          if (favorite === id) {
            const newArray = favorites.splice(index);

            setFavorites(newArray);
          }

          return;
        })
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
