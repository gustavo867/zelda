import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Shop from "./screens/Shop";
import Game from "./screens/Game";
import Characters from "./screens/Characters";
import Character from "./screens/Character";

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Shop" component={Shop} />
        <Screen name="Game" component={Game} />
        <Screen name="Characters" component={Characters} />
        <Screen name="Character" component={Character} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
