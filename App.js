
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import Home from "./src/pages/home";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login acesso'}}
        />

        <Stack.Screen
          name="Registro"
          component={Register}
          options={{title: 'Registro'}}
        />
        
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
      
      </Stack.Navigator>
    </NavigationContainer>

  );
}
