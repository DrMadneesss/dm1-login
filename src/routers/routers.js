import AppRouters from "./AppRouters";
import AuthRouters from "./AuthRouters";




export default function App() {
    const user = "null"; 
  return (
  <>

    {user == null ? <AppRouters />: <AuthRouters/>}
    
  </>

  );
}
