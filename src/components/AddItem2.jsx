import React, { useContext, useState } from "react";

// State
import { StoreContext } from "../reducer";

export default (props) => {
  const _defaultFields = {
    add1: "",
    add2: "",
    add3: ""
  };
  const store = useContext(StoreContext);
  const dispatch = store.dispatch;
  const [fields, setFields] = useState({ ..._defaultFields });

  const handleInputChange = (evt) => {
    setFields({
      ...fields,
      [evt.target.id]: evt.target.value
    });
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setFields(_defaultFields);
  };

  return (
    <form onSubmit={handleFormSubmit} class="f3">
      <input
        id="add1"
        type="radio"
        value={fields.name}
        onChange={handleInputChange}
      />
      <label htmlFor="add1" class="f31">
        Double Dark Chunk Chocolate Cookie
      </label>
      <input
        id="add2"
        type="radio"
        value={fields.description}
        onChange={handleInputChange}
      />
      <label htmlFor="add2" class="f32">
        Oatmeal Raisin Cookie
      </label>
      <input type="radio" id="add3" name="fav_language" value="HTML" /> {" "}
      <label htmlFor="add3" class="f33">
        Dark Chunk Chocolate Cookie
      </label>
      <button type="submit" class="add11">
        Add item
      </button>
    </form>
  );
};
