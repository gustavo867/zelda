import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background-color: #131313;
`;

export const Image = styled.Image`
  width: ${width}px;
  height: ${height * 0.5}px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: #13131a;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-align: center;
  padding: 10px;
`;

export const ResizeButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
  top: ${height * 0.45}px;
  z-index: 10;
`;

export const BottomContainer = styled.View`
  flex-grow: 1;
  background-color: #131313;
  padding: 15px;
  margin-top: 10px;
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
