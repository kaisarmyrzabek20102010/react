import { createContext, useState } from "react";

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [flights, setFLights] = useState([]);
  const [bookings, setbookings] = useState([]);

  return (
    <FlightContext.Provider
      value={{ flights, setFLights, bookings, setbookings }}
    >
      {children}
    </FlightContext.Provider>
  );
};
