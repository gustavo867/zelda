import React, { useState, createContext } from "react";

const FavoriteContext = createContext({});

const FavoriteProvider: React.FC = ({ ...props }) => {
  const [state, setState] = useState<string[]>([]);

  return (
    <FavoriteContext.Provider value={[state, setState]}>
      {props.children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteProvider };
