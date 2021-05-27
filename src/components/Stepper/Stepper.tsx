import React from "react";
import useGenericState from "../../Library/useGenericState";
import { StepsProps } from "./Stepper.dto";

export default function Stepper(props: StepsProps): JSX.Element {
  const { className, initial, style, children, titleList } = props;

  const [state, setState] = useGenericState({
    children: React.Children.toArray(children),
    current: initial || 0,
  });

  const { current, children: steps } = state;

  const handleClick = (activeStep: number) => {
    setState({ current: activeStep });
  };

  return (
    <div className={className} style={style}>
      <h2>{titleList[current].title}</h2>
      {steps[state.current]}
      <button
        type="button"
        disabled={current === steps.length - 1 && true}
        onClick={() => handleClick(current + 1)}
      >
        Next
      </button>
      <button
        type="button"
        disabled={!current}
        onClick={() => handleClick(current - 1)}
      >
        Previous
      </button>
    </div>
  );
}
