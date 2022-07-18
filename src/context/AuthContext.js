 import { signOut } from "firebase/auth";
import { createContext, currentContext, useReducer, useEffect} from "react";
import { auth } from "../firebase";
 import AuthReducer from "./AuthReducer"; 

 const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
 };

 

 export const AuthContext = createContext(INITIAL_STATE);


 export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser))
    }, [state.currentUser])

    const logout = () => {
       return signOut(auth)
    }
    
    
    return(
       <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch, logout}}>
        {children}
       </AuthContext.Provider>
    );
 };