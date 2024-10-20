import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
function Cart() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const removeItem = (id) => {
    const updatedfilter = list.filter((item) => item.id !== id);
    setList(updatedfilter);
  };

  const handelList = () => {
    if (name === "") {
      setError(true);
    } else {
      setError(false);
      let id = uuidv4();
      const obj = {
        id: id,
        firstName: name,
      };
      setList([...list, obj]);
      console.log(list);
      setName("");
    }
  };

  return (
    <div className="page">
      <div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button onClick={handelList}>Add</button>
        {error && <p>Please Enter the Value</p>}
      </div>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            <p>{todo.firstName}</p>
            <div>
              <button onClick={() => removeItem(todo.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cart;
