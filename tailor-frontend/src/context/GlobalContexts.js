import { createContext, useEffect,useState } from "react";
// import { AppReducer } from "./AppReducer";
import axios from "axios";

// All data
const globalData = {
  // Data: [],
  // userMeasurement:{}
};

// create context
export const GlobalContext = createContext(globalData);

// store data

// provider component

export const GlobalProvider = ({ children }) => {
  // const [state, despatch] = useReducer(AppReducer, globalData);
  //   Action
  // async function userMeasurement(userMeasurement){
  //     const config = {
  //         header :{
  //             "Content-Type": "application/json"
  //         }
  //     }

  //     try {

  //         const response = await axios.get("/users/signup",userData,config);
  //         console.log("response =",response);
  //         despatch({
  //           type:"user-Measurement",
  //           payload:response.data.data,
  //         })
  //     } catch (err) {
  //     }
  // }

  const [isSidebar, setSidebar] = useState(true);

  // for user login data
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
  
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await axios.post("/users/token-valid", null, {
        headers: { "x-auth-token": token },
      });

      if (tokenRes.data) {
        const userRes = axios.get("/users/", {
          headers: { "x-auth-token": token },
        });
       
        // const verifySession = axios.get("/users/session",{
        //   headers:{"x-auth-token":token}
        // })
        // console.log("Hello form session",(await verifySession).data)
        setUserData({
          token,
          user: (await userRes).data,
        });
      }
    };

    checkLoggedIn();

    
  }, []);

  const [getMeasurement, setMeasurement] = useState({

     
  })
  // get measurment
  useEffect(()=>{
   

  },[])

  return (
    <GlobalContext.Provider
      value={{
        userData,
        setUserData,
        isSidebar,
        setSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
