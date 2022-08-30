import React, { useEffect, useState } from "react";
import "./Todo.css";

const getLocalData = () => {
  const list = localStorage.getItem("myTodoList");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

const Todo = () => {
  const [input, setInput] = useState();
  const [addTodo, setAddTodo] = useState(getLocalData());
  const [newItem, setNewItem] = useState();
  const [toggleBtn, setToggleBtn] = useState(false);

  // adding item function

  const todoBtn = () => {
    if (!input) {
      alert("plz enter data");
    } else if (input && toggleBtn) {
      setAddTodo(
        addTodo.map((currElm) => {
          if (currElm.id === newItem) {
            return { ...currElm, name: input };
          }
          return currElm;
        })
      );
      setToggleBtn(false);
    } else {
      const newInputData = { id: new Date().getTime().toString(), name: input };

      setAddTodo([...addTodo, newInputData]);
    }
    setInput("");
  };

  //edit element

  const editButton = (idx) => {
    const newEditItem = addTodo.find((newElm) => {
      return newElm.id === idx;
    });
    setInput(newEditItem.name);
    setNewItem(idx);
    setToggleBtn(true);
  };

  //delete element

  const deleteItem = (id) => {
    const updatedItem = addTodo.filter((currElm) => {
      return currElm.id !== id;
    });
    setAddTodo(updatedItem);
  };

  const deleteAll = () => {
    setAddTodo([]);
  };

  //localStorage

  useEffect(() => {
    return localStorage.setItem("myTodoList", JSON.stringify(addTodo));
  }, [addTodo]);

  return (
    <>
      <div className="main__container">
        <div className="child_1">
          <div className="img__container">
            <img
              src="./images/todo.svg"
              alt="todoLogo"
              style={{ width: "200px", height: "150px" }}
            />
            <figure>
              <figcaption>Add Your List Here✌</figcaption>
            </figure>
            <div className="input__container">
              <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input}
                name={input}
                placeholder="Add item✍"
                style={{
                  width: "350px",
                  height: "40px",
                  paddingLeft: "15px",
                  fontSize: "15px",
                }}
              />
              {toggleBtn ? (
                <i
                  className="fa-solid fa-edit"
                  onClick={todoBtn}
                  style={{ paddingRight: "15px", cursor: "pointer" }}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-plus"
                  onClick={todoBtn}
                  style={{ paddingRight: "15px", cursor: "pointer" }}
                ></i>
              )}
            </div>
          </div>

          {addTodo.map((currElm) => {
            return (
              <div className="child__2">
                <p>{currElm.name}</p>
                <span className="span__icons">
                  <i
                    className="fa-solid fa-edit"
                    onClick={() => editButton(currElm.id)}
                  ></i>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => deleteItem(currElm.id)}
                    style={{ paddingLeft: "10px" }}
                  ></i>
                </span>
              </div>
            );
          })}
          <button onClick={deleteAll}>Clear All</button>
        </div>
      </div>
    </>
  );
};

export default Todo;
