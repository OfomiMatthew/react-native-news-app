
import { createStackNavigator } from '@react-navigation/stack'
import { View } from 'react-native'

import Home from '../Screen/Home'
import News from '../Screen/News'

const Stack = createStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="News" component={News} />
   
  </Stack.Navigator>

  )
}

export default HomeNavigator
