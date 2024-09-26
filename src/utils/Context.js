import React, { createContext, useState } from "react";
import { attractionSites } from "../data/data";

export const PlacesContext = createContext();

const Context = ({ children }) => {
  const [places, setPlaces] = useState(attractionSites);

  const handlePlaces = (value) => {
    setPlaces((prev) => {
      return [...prev, value];
    });
  };
  return (
    <PlacesContext.Provider value={{ places, handlePlaces }}>
      {children}
    </PlacesContext.Provider>
  );
};

export default Context;
