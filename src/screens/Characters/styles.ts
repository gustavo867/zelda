import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  padding-top: 54px;
  background-color: #131313;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 34px;
  font-weight: 700;
  padding-left: 20px;
  letter-spacing: 1.2px;
`;

export const CharactersList = styled.FlatList`
  flex-grow: 1;
`;

export const CharacterContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const Button = styled.TouchableOpacity`
  width: ${width * 0.4}px;
  height: ${height * 0.3}px;
`;

export const CharacterName = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin-top: 10px;
`;

export const ChracterImage = styled.Image`
  width: ${width * 0.4}px;
  height: ${height * 0.3}px;
  border-radius: 20px;
`;
