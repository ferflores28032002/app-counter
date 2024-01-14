import { ViewCounterProps } from "../../interfaces/viewCounter.interface";

const ViewCounter = (props: ViewCounterProps) => {
  return <div className="display-5 text-center pb-4">{props.counter}</div>;
};

export default ViewCounter;
