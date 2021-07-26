import React, { useReducer, useEffect } from "react";

// Styles
import "./styles.css";

// Data
import initialState from "./initialstate";
import {  reducer, StoreContext } from "./reducer";

// Components
import AddItem from "./components/AddItem";
import AddItem1 from "./components/AddItem1";
import AddItem2 from "./components/AddItem2";

export default (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      <h2 class="h12">Customize "BFF Veg Sub Combo(15cm, 6 Inch)*</h2>
      <hr />
      <p class="p12">
        Choice of Bread . Choice of 2nd Free Cookie . Choice of Sauce Any(3){" "}
      </p>
      {state.loadingItems && <div className="loading">...loading</div>}
      {!state.loadingItems && (
        <div className="columns">
          <div className="column">
            <h2 class="h11">Choice of Bread</h2>
            <AddItem />
          </div>
          <div className="column">
            <h2 class="h22">Choice of 2nd Free Cookie</h2>
            <AddItem1 />
          </div>
          <div className="column">
            <h2 class="h33">Choice of Sauce Any(3)</h2>
            <AddItem2 />
          </div>
        </div>
      )}
    </StoreContext.Provider>
  );
};
