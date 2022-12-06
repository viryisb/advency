import "./styles.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialList = [
  {
    id: 1,
    name: "Medias"
  },
  { id: 2, name: "Gorras" },
  {
    id: 3,
    name: "teclado"
  }
];
export default function App() {
  const [list, setList] = useState(initialList);
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  const handleAdd = () => {
    const newList = list.concat({ name, id: uuidv4() });

    setList(newList);

    setName("");
  };
  const handleRemove = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <div className="App">
      <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />

      <List list={list} onRemove={handleRemove} />
    </div>
  );
}

const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input type="text" value={name} onChange={onChange} />
    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>
);

const List = ({ list, onRemove }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.id} item={item} onRemove={onRemove} />
    ))}
  </ul>
);
const Item = ({ item, onRemove }) => (
  <li>
    <span>{item.name}</span>

    <button type="button" onClick={() => onRemove(item.id)}>
      Remove
    </button>
  </li>
);
