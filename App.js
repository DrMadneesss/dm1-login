import {NavigationContainer} from '@react-navigation/native';
import AppRouters from './src/routers/AppRouters';



export default function App() {
  return (
  <>
    <NavigationContainer>
      <AppRouters />
    </NavigationContainer>
  </>

  );
}
