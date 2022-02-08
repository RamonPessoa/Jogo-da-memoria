import React, { useContext, useState } from 'react';

type MyContext = {
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
};

const levelContext = React.createContext({} as MyContext);

type MyProps = {
  children: React.ReactNode;
};

export default function LevelContext({ children }: MyProps) {
  const [level, setLevel] = useState<number>(1);
  return (
    <levelContext.Provider value={{ level, setLevel }}>
      {children}
    </levelContext.Provider>
  );
}

export function useLevel() {
  const context = useContext(levelContext);

  return context;
}
