import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import History from './screens/History';
import Home from './screens/Home';
import Profile from './screens/Profile';
import CategoryPg from './screens/Profile';
import Liability from './screens/Liability';
import Bills from './screens/Bills';
import Start from './screens/Start';
import Header from './components/Header';

const PageHeader = ({navigation, title}) => (
  <Header>
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </Header>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Start"
        component={Start}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

// const HomeStack = createStackNavigator();
// const HomeStackScreen = () => {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen
//         name="Home"
//         component={Home}
//         options={{headerShown: false}}
//       />
//       <HomeStack.Screen
//         name="CategoryPg"
//         component={CategoryPg}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <HomeStack.Screen
//         name="Liability"
//         component={Liability}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <HomeStack.Screen
//         name="Bills"
//         component={Bills}
//         options={{
//           headerShown: false,
//         }}
//       />
//     </HomeStack.Navigator>
//   );
// };

const Tabs = createBottomTabNavigator();

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="Home"
      component={HomeScreen}
      options={{header: ({navigation}) => <PageHeader title="FaMoney" />}}
    />
    <Tabs.Screen
      name="History"
      component={History}
      options={{header: ({navigation}) => <PageHeader title="History" />}}
    />
    <Tabs.Screen
      name="Profile"
      component={Profile}
      options={{header: ({navigation}) => <PageHeader title="Profile" />}}
    />
  </Tabs.Navigator>
);

export default function Routes({userToken}) {
  return (
    <NavigationContainer>
      {userToken ? <TabsScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
});
