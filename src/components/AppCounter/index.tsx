import { useCounter } from "../../hooks/useCounter";
import ViewCounter from "../ViewCounter";

const AppCounter = () => {
  const counter = useCounter(0);

  return (
    <div className="w-full vh-100 d-flex justify-content-center align-items-center">
      <div className="shadow p-5 rounded">
        <ViewCounter counter={counter.counter} />

        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button
            type="button"
            onClick={() => counter.increaseCounter()}
            className="btn btn-outline-primary"
          >
            increase
          </button>
          <button
            type="button"
            onClick={() => counter.decreaseCounter()}
            className="btn btn-outline-primary"
          >
            decrease
          </button>
          <button
            type="button"
            onClick={() => counter.resetCounter()}
            className="btn btn-outline-primary"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCounter;
