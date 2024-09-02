import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();

export default function AuthRouters(){
    return(
        <Stack.Navigator>
        
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
      
      </Stack.Navigator>
    )
}