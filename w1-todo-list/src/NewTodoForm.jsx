import { useState } from "react";
export function NewTodoForm({onSubmit}) {

    const [newItem, setNewItem] = useState("");

    function handleSubmit(e){
        if(newItem === "") return

        onSubmit(newItem);

        e.preventDefault();
        setNewItem("");
      }

    return <form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" value={newItem} onInput={e => setNewItem(e.target.value)}></input>
    </div>
    <button className="btn">Add</button>
  </form>
}