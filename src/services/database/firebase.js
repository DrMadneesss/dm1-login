import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyD9HruOxoD_Xr557nwATzzvY0QpnEtbBGU",
  authDomain: "app-aula-ddm1-2s24.firebaseapp.com",
  projectId: "app-aula-ddm1-2s24",
  storageBucket: "app-aula-ddm1-2s24.appspot.com",
  messagingSenderId: "829251804099",
  appId: "1:829251804099:web:7cb3d07da02bab2b933b76"
};
const app = initializeApp(firebaseConfig);
 
export const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(AsyncStorage)
 
});
 
