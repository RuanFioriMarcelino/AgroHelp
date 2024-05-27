import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "./types";

import Icon from "react-native-vector-icons/FontAwesome5";
import Ion from "react-native-vector-icons/Ionicons";

import Welcome from "../screens/welcome";
import Entry from "../screens/entry";
import Register from "../screens/register";

import Shop from "../pages/shop";
import Experts from "../pages/experts";
import Settings from "../pages/settings";
import Home from "../pages/home";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const Style = {
  colorActive: "#67980d",
  colorInactive: "#8ac110",
  sizeActive: 35,
  sizeInactive: 25,
};

export default function Routes() {
  const a = false;
  if (!a) {
    return (
      <Tab.Navigator initialRouteName="PageInitial">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },

            tabBarIcon: ({ focused }) => (
              <Icon
                name="home"
                style={{
                  color: focused
                    ? `${Style.colorActive}`
                    : `${Style.colorInactive}`,
                  fontSize: focused ? Style.sizeActive : Style.sizeInactive,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ focused }) => (
              <Icon
                name="shopping-basket"
                style={{
                  color: focused
                    ? `${Style.colorActive}`
                    : `${Style.colorInactive}`,
                  fontSize: focused ? Style.sizeActive : Style.sizeInactive,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Experts"
          component={Experts}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ focused }) => (
              <Icon
                name="user-tie"
                style={{
                  color: focused
                    ? `${Style.colorActive}`
                    : `${Style.colorInactive}`,
                  fontSize: focused ? Style.sizeActive : Style.sizeInactive,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: false,
            tabBarLabel: () => {
              return null;
            },
            tabBarIcon: ({ focused }) => (
              <Ion
                name="settings"
                style={{
                  color: focused
                    ? `${Style.colorActive}`
                    : `${Style.colorInactive}`,
                  fontSize: focused ? Style.sizeActive : Style.sizeInactive,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  if (a) {
    return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Entry"
          component={Entry}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}
