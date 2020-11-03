import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #131313;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-align: center;
  padding: 10px;
`;

export const BackgroundImage = styled.Image`
  width: ${width}px;
  height: ${height * 0.4}px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const BottomContainer = styled.View`
  flex-grow: 1;
  background-color: #131313;
  padding: 15px;
  margin-top: 10px;
`;

export const HeartButton = styled.TouchableOpacity`
  position: absolute;
  right: 25px;
  top: 55px;
  z-index: 2;
`;

export const BoldText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const Description = styled.Text`
  color: #ccc;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
