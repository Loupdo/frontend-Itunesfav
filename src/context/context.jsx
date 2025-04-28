import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [dataSearch, setDataSearch] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [token, setToken] = useState("");

  const fetchToken = async () => {
    try {
      // GET token from backend (tokenRoute)
      const response = await axios.get("/api/token");
      setToken(response.data.token);
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <AppContext.Provider
      value={{
        dataSearch,
        setDataSearch,
        favorites,
        setFavorites,
        token,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
