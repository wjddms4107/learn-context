import { MouseEventHandler, PropsWithChildren } from "react";
import "./App.css";
import {
  CounterContextProvider,
  useCounterContext,
} from "./CounterContextProvider";

function Button({
  onClick,
  children,
}: PropsWithChildren<{
  onClick: MouseEventHandler<HTMLButtonElement>;
}>) {
  return <button onClick={onClick}>{children}</button>;
}

function Viewer() {
  const context = useCounterContext();

  return <span>{context.count}</span>;
}

function PlusButton() {
  const context = useCounterContext();

  return (
    <Button onClick={() => context.setCount((value) => value + 1)}>+</Button>
  );
}

function MinusButton() {
  const context = useCounterContext();

  return (
    <Button onClick={() => context.setCount((value) => value - 1)}>-</Button>
  );
}

function App() {
  return (
    <CounterContextProvider>
      <PlusButton />
      <Viewer />
      <MinusButton />
    </CounterContextProvider>
  );
}

export default App;
