import React from "react";
import "./App.css";
// Step 1 Import Some Hooks From Redux
import { useSelector, useDispatch } from "react-redux";
// Step 2 Import The Actions From Slice
import { increase, decrease } from "./redux/CounterSlices";

import {toggleAuth} from './redux/AuthSlice'

function Counter() {
  // Step 3 Get All The Store In Redux
  const genralState = useSelector((state) => state);

  // Step 4 Create Function From Use disPatch
  const disPatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>

      {genralState.auth.toggleAuth && (
        <>
          <div className="counter">Counter:{genralState.count.value}</div>
          <div>
            <button className="btn" onClick={() => disPatch(increase(10))}>
              increase +
            </button>
            <button className="btn" onClick={() => disPatch(decrease(5))}>
              decrease -
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn" onClick={()=> disPatch(toggleAuth())}>{genralState.auth.toggleAuth ? 'LogOut' : 'LogIn'}</button>
      </div>
    </div>
  );
}

export default Counter;
