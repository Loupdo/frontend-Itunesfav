import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [dataSearch, setDataSearch] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [token, setToken] = useState("");
  const API_BASE_URL = import.meta.env.PROD
    ? "https://backend-itunesfav.onrender.com"
    : "/api";

  const fetchToken = async () => {
    try {
      // GET token from backend (tokenRoute)
      const response = await axios.get(`${API_BASE_URL}/token`);
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
