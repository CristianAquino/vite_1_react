import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { initialUser, storeReducer } from "./storeReducer";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialUser);
  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext)[0];
export const useDispatch = () => useContext(StoreContext)[1];

export default StoreProvider;
