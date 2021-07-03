import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import * as React from "react";
import HomeScreen from "../Screens/HomeScreen";
import VideoScreen from "../Screens/VideoScreen";
import GalleryScreen from "../Screens/GalleryScreen";
import ImageScreen from "../Screens/ImageScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: true,
          headerStyle: {
            backgroundColor: "#d7307e",
            borderBottomWidth: 0,
          },
          headerTintColor: "#fff",
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: "Filler", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Video"
          component={VideoScreen}
          options={{ headerTitle: "YouTube", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{ headerTitle: "Gallery", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Image"
          component={ImageScreen}
          options={{ headerTitle: "Gallery", headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
