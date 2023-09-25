import {
  useEffect,
  useRef,
  useState,
  useReducer,
  useLayoutEffect,
  useMemo,
  useCallback,
} from "react";
import SinglePost from "./SinglePost";
import PrintTable from "./PrintTable";

const MainComponent = () => {
  //This action is for the USEREDUCER HOOK
  const ACTION = {
    INCREASE: "increase",
    DECREASE: "decrease",
  };
  const [name, setName] = useState("");
  const count = useRef(0);
  const inputEle = useRef();
  useEffect(() => {
    count.current += 1;
  });
  function handleClick() {
    console.log(inputEle.current);
    inputEle.current.style.width = "300px";
    inputEle.current.focus();
  }
  //-------> Use reducer block
  const initialState = { countuseReducer: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION.INCREASE:
        return { countuseReducer: state.countuseReducer + 1 };
      case ACTION.DECREASE:
        return { countuseReducer: state.countuseReducer - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseCount = () => {
    dispatch({ type: ACTION.INCREASE });
  };

  const decreaseCount = () => {
    dispatch({ type: ACTION.DECREASE });
  };
  //-------> Use reducer block ends
  //-------> Use layout block
  const textRef = useRef();
  const [toogle, setToogle] = useState(false);

  useLayoutEffect(() => {
    if (textRef.current != null) {
      const dimension = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimension.height}px`;
    }
  }, [toogle]);
  //-------> Use layout block ends
  //-------> Use memo hook
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const calculation = useMemo(() => {
    expensiveFunction(number);
  }, [number]);
  //const calculation = expensiveFunction(number);
  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  //-------> Use callback hook
  const calculateTable = useCallback(() => {
    return [number * 1, number * 2, number * 3, number * 4, number * 5];
  }, [number]);
  // const calculateTable = () => {
  //   return [number * 1, number * 2, number * 3, number * 4, number * 5];
  // };
  return (
    <>
      <SinglePost />

      <div className="m-4">
        <h2>
          Using the useRef Creating mutable variable which will not cause
          re-render
        </h2>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <h2>Name: {name}</h2>
        <h2>Renders: {count.current}</h2>
      </div>
      <div className="m-4">
        <h2>Using the useRef Accesing DOM elements</h2>
        <input type="text" ref={inputEle} />
        <div className="m-4">
          <button className="btn btn-primary btn-lg" onClick={handleClick}>
            Click HERE
          </button>
        </div>
      </div>
      <div className="m-4">
        <h2>Using useReducer hook, Count: {state.countuseReducer}</h2>
        <div className="m-4">
          <button
            className="btn btn-primary btn-lg m-2"
            onClick={increaseCount}
          >
            Increase
          </button>
          <button className="btn btn-primary btn-lg" onClick={decreaseCount}>
            Decrease
          </button>
        </div>
      </div>
      <div className="m-4">
        <h2>Using useLayoutEffect hook</h2>
        <div className="m-4">
          {toogle && <h4 ref={textRef}>Text to toogle</h4>}
          <button
            className="btn btn-primary btn-lg m-2"
            onClick={() => setToogle(!toogle)}
          >
            Toogle Text
          </button>
        </div>
      </div>
      <div className="m-4" style={cssStyle}>
        <h2>MemoHook</h2>
        <div className="m-4">
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.valueAsNumber)}
          />
          <h2>Calculation: {calculation}</h2>
          <PrintTable calculateTable={calculateTable} />
          <button
            className="btn btn-primary btn-lg m-2"
            onClick={() => setDark(!dark)}
          >
            Toogle Text
          </button>
        </div>
      </div>
    </>
  );
};

function expensiveFunction(num) {
  const startTime = new Date();
  for (let index = 0; index < 1000000000; index++) {}
  const endTime = new Date();
  let timeElapsed = endTime - startTime;
  console.log("Total time elapsed: " + timeElapsed + " milliseconds.");
  return num;
}

export default MainComponent;
