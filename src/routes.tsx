import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Shop from "./screens/Shop";
import Game from "./screens/Game";

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Shop" component={Shop} />
        <Screen name="Game" component={Game} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
