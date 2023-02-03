import React, { useState } from 'react';

const CalculadoraContext = React.createContext();

function CalculadoraProvider({ children }) {
  const [displayValue, setDisplayValue] = useState(' ');

  const [historyValue, setHistoryValue] = useState([]);




  return (
    <CalculadoraContext.Provider
      value={{
        displayValue,
        setDisplayValue,
        historyValue,
        setHistoryValue,

      }}
    >
      {children}
    </CalculadoraContext.Provider>
  );
}

export { CalculadoraContext, CalculadoraProvider };