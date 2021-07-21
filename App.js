import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DailyPicScreen from "./screens/DailyPic";
import StarMapScreen from "./screens/SpaceCrafts";
import SpaceCraftScreen from "./screens/StarMap";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SpaceCraft" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;