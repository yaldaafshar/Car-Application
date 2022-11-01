import { createContext, useState } from 'react';

export const CarContext = createContext({
  setCarName: () => null,
  carNames: [],
});

export const CarProvider = ({ children }) => {
  const [carNames, setCarNames] = useState([]);
  const value = { carNames, setCarNames };

  return <CarContext.Provider value={value}>{children}</CarContext.Provider>;
};