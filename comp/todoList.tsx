// Most from https://reactcommunity.org/react-transition-group/transition-group
import { nanoid } from "nanoid";
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export function TodoList() {
  const [items, setItems] = React.useState([
    { id: nanoid(), text: "Buy eggs" },
    { id: nanoid(), text: "Pay bills" },
    { id: nanoid(), text: "Invite friends over" },
    { id: nanoid(), text: "Fix the TV" },
  ]);
  return (
    <div style={{ marginTop: "2em" }}>
      <TransitionGroup className="todo-list">
        {items.map(({ id, text }) => (
          <CSSTransition key={id} timeout={500} classNames="item">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                padding: ".5em",
                border: "1px solid red",
              }}
            >
              <button
                className="remove-btn"
                style={{ marginRight: ".5em" }}
                onClick={() =>
                  setItems((items) => items.filter((item) => item.id !== id))
                }
              >
                &times;
              </button>
              {text}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <button
        onClick={() => {
          const text = prompt("Enter some text");
          if (text) {
            setItems((items) => [...items, { id: nanoid(), text }]);
          }
        }}
      >
        Add Item
      </button>
    </div>
  );
}
