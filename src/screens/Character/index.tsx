import { useRoute } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import * as S from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Characters } from "../Characters";
import charactersImages from "../../utils/charactersImages";

interface Params {
  character: Characters;
}

const Character: React.FC = () => {
  const [resize, setResize] = useState<
    "cover" | "contain" | "stretch" | "repeat" | "center" | undefined
  >("cover");

  const route = useRoute();

  const { character } = route.params as Params;

  const changeResize = useCallback(() => {
    setResize((state) => (state === "cover" ? "contain" : "cover"));
  }, []);

  return (
    <S.Container>
      <S.Image
        resizeMode={resize}
        source={{
          uri: charactersImages(character.name),
        }}
      />
      <S.ResizeButton onPress={changeResize} delayPressIn={1}>
        <Ionicons name="ios-resize" size={24} color="#FFFF" />
      </S.ResizeButton>
      <S.Title>{character.name}</S.Title>
      <S.BottomContainer>
        <S.BoldText>Description:</S.BoldText>
        <S.Description>{character.description}</S.Description>
        <S.Row>
          <S.BoldText>Gender: </S.BoldText>
          <S.Description>
            {character.gender !== null ? character.gender : "Don't have gender"}
          </S.Description>
        </S.Row>
        <S.Row>
          <S.BoldText>Race: </S.BoldText>
          <S.Description>{character.race}</S.Description>
        </S.Row>
      </S.BottomContainer>
    </S.Container>
  );
};

export default Character;
