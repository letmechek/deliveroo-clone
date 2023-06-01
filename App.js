import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ResterauntScreen from './screens/ResterauntScreen';
import BasketScreen from './screens/BasketScreen';
import { Provider } from 'react-redux';
import { store } from './store';






const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
    <TailwindProvider>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Resteraunt" component={ResterauntScreen} />
      <Stack.Screen 
      name="Basket" 
      component={BasketScreen} 
      options={{ presentation: 'modal',
      headerShown: false }}
      />
    </Stack.Navigator>
    </TailwindProvider>
    </Provider>
    </NavigationContainer>
  );
}

      
  

