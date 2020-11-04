import React, { useCallback, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import characterImages from "../../utils/charactersImages";

export interface Characters {
  appearances: string[];
  _id: string;
  name: string;
  description: string;
  gender: string;
  race: string;
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Characters[] | null>();

  const { navigate } = useNavigation();

  const getData = useCallback(async () => {
    await axios
      .get("https://zelda-api.apius.cc/api/characters")
      .then((response) => {
        const data = response.data.data;

        setCharacters(data);
      });

    if (characters !== null) {
      storeData();
    }
  }, []);

  useEffect(() => {
    async function verifiedData() {
      const value = await AsyncStorage.getItem("@zelda_characters");

      if (value !== null) {
        const data = JSON.parse(value);

        setCharacters(data);
      } else {
        getData();
      }
    }

    verifiedData();
  }, []);

  async function storeData() {
    const data = JSON.stringify(characters);

    try {
      await AsyncStorage.setItem("@zelda_characters", data);
    } catch (e) {
      return;
    }
  }

  async function clearStorage() {
    await AsyncStorage.clear();
  }

  const navigateToCharacter = useCallback((character: Characters) => {
    navigate("Character", { character });
  }, []);

  const Item = (item: Characters) => {
    return (
      <S.CharacterContainer>
        <S.Button onPress={() => navigateToCharacter(item)} delayPressIn={1}>
          <S.ChracterImage source={{ uri: characterImages(item.name) }} />
        </S.Button>
        <S.CharacterName>{item.name}</S.CharacterName>
      </S.CharacterContainer>
    );
  };

  return (
    <S.Container>
      <S.Title>Characters</S.Title>
      <S.CharactersList
        data={characters}
        keyExtractor={(item: any) => item._id}
        renderItem={({ item }: any) => <Item {...item} />}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        bounces={false}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </S.Container>
  );
};

export default Characters;
