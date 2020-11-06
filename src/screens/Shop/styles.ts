import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  padding-top: 54px;
  background-color: #131313;
`;

export const GamesList = styled.FlatList`
  flex-grow: 0;
  margin-top: 25px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 34px;
  font-weight: 700;
  padding-left: 20px;
  letter-spacing: 1.2px;
`;

export const GameContainer = styled.View`
  height: ${height * 0.75}px;
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
  width: 100%;
  height: 100%;
  border-radius: 24px;
`;

export const GameButton = styled.TouchableOpacity`
  width: ${width * 0.8}px;
  height: 90%;
  align-items: center;
  justify-content: center;
`;

export const ResizeButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  bottom: 20px;
  z-index: 10;
`;

export const SmallText = styled.Text`
  color: #ccc;
  font-size: 14px;
  font-weight: 300;
  padding-left: 20px;
  letter-spacing: 0.4px;
  margin-top: 12px;
`;

export const Loading = styled.ActivityIndicator`
  margin-top: 15px;
`;

export const LoadingContainer = styled.View`
  flex-direction: column;
  height: ${height * 0.75}px;
  width: ${width}px;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.Text`
  color: #ffffff;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 1.2px;
`;

export const Button = styled.TouchableOpacity`
  width: ${width * 0.83}px;
  height: 56px;
  border-radius: 14px;
  background-color: #3700b3;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 30px;
`;

export const Text = styled.Text`
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.4px;
`;
