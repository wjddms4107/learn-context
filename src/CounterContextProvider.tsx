import React, {
  useState,
  Dispatch,
  FC,
  PropsWithChildren,
  createContext,
  useContext,
} from "react";

interface ICounterContext {
  count: number;
  setCount: Dispatch<React.SetStateAction<number>>;
}

export const CounterContext = createContext<ICounterContext | null>(null);

export const CounterContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("context가 없습니다.");
  }

  return context;
};
