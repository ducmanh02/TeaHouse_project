import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState(() => {
    const storedList = localStorage.getItem("toDoList");
    return storedList ? JSON.parse(storedList) : [];
  });
  const [editingIndex, setEditingIndex] = useState(null);
  // ADD TAsk
  function handleSubmit(event) {
    event.preventDefault();
    setList([...list, toDo]);
    setToDo("");

    //save the list to local storage
    localStorage.setItem("toDoList", JSON.stringify([...list, toDo]));
  }
  // delete task and delete task of localstorage
  function handleDelete(index) {
    const newList = list.filter((element, i) => i !== index);
    setList(newList);
    localStorage.setItem("toDoList", JSON.stringify(newList));
  }
  //edit input  task
  function handleEdit(index, newToDo) {
    const newList = list.map((item, i) => (i === index ? newToDo : item));
    setList(newList);
    localStorage.setItem("toDoList", JSON.stringify(newList));
  }
  //DELETE ALL
  function handleDeleteAll() {
    localStorage.clear();
    const newList = [];
    setList(newList);
    localStorage.setItem("toDoList", JSON.stringify(newList));
  }

  return (
    <div style={{ padding: 32 }}>
      <div style={{ display: "flex" }}>
        <form
          style={{ display: "inlineBlock" }}
          onSubmit={handleSubmit}
          action=""
        >
          <h1>TO DO LIST</h1>
          <input
            type="text"
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
          />
          <button type="submit">ADD</button>
        </form>
        <button
          onClick={handleDeleteAll}
          style={{ fontSize: "14px", marginLeft: 10 }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "red")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
        >
          DELETE ALL
        </button>
      </div>
      {list.map((item, index) => (
        <div style={{ display: "flex", paddingTop: 20 }}>
          {editingIndex === index ? (
            <>
              <input
                type="text"
                defaultValue={item}
                onChange={(e) => handleEdit(index, e.target.value)}
              />
              <button onClick={() => setEditingIndex(null)}>DONE</button>
            </>
          ) : (
            <>
              <li key={item}>{item}</li>
              <button
                onClick={() => handleDelete(index)}
                style={{ marginLeft: 10, marginTop: 3, padding: 1 }}
              >
                DELETE
              </button>
              <button
                onClick={() => setEditingIndex(index)}
                style={{ marginLeft: 10, marginTop: 3, padding: 1 }}
              >
                EDIT
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
