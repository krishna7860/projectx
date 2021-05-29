import React from "react";
import useGenericState from "../../Library/useGenericState";
import { StepsProps } from "./Stepper.interface";
import styles from "./Stepper.style";

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

  const headerWidth = `${100 / titleList.length}%`;

  return (
    <div className={className} style={{ width: "50vw" }}>
      <div style={styles.headerList}>
        {titleList.map((header) => (
          <div style={styles.header(headerWidth)}>
            <h4>{header.title}</h4>
            <span>{header.description}</span>
          </div>
        ))}
      </div>
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
