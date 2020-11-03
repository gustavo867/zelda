import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  padding-top: 54px;
  background-color: #131313;
`;

export const GamesList = styled.FlatList`
  flex-grow: 1;
  margin-top: 25px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 34px;
  font-weight: 700;
  padding-left: 20px;
  letter-spacing: 1.2px;
`;

export const GameContainer = styled.TouchableOpacity`
  height: ${height * 0.8}px;
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;

export const GameName = styled.Text`
  color: #ffffff;
  font-size: 13px;
  font-weight: 400;
  margin-top: 25px;
`;

export const GameImage = styled.Image`
  width: 80%;
  height: 80%;
  border-radius: 24px;
`;

export const ResizeButton = styled.TouchableOpacity`
  position: absolute;
  right: 55px;
  bottom: ${height * 0.12}px;
  z-index: 2;
`;

export const SmallText = styled.Text`
  color: #ccc;
  font-size: 14px;
  font-weight: 300;
  padding-left: 20px;
  letter-spacing: 0.4px;
  margin-top: 12px;
`;
