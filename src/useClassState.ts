import React from "react";
import { useRef, useState } from "react";
import { ClassState } from "./ClassState";

const useForceUpdate = () => {
  const [_, setState] = useState<number>(0);

  const forceUpdate = React.useCallback(() => {
    setState((prev) => prev + 1);
  }, []);

  return forceUpdate;
};

export const useClassState = <U, T extends ClassState<U>>(classInstance: T) => {
  const forceUpdate = useForceUpdate();
  const stateController = useRef<T>(classInstance["init"](forceUpdate));

  return stateController.current;
};
