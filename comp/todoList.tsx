// Most from https://reactcommunity.org/react-transition-group/transition-group
import { nanoid } from "nanoid";
import React from "react";
import { Transition, TransitionGroup } from "react-transition-group";

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

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
          <Transition
            key={id}
            timeout={{ enter: 0, exit: 500 }}
            classNames="item"
          >
            {(state) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: ".5em",
                  border: "1px solid red",
                  ...defaultStyle,
                  ...transitionStyles[state as "entering"], // trick the type checker
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
            )}
          </Transition>
        ))}
      </TransitionGroup>

      <button
        style={{ marginTop: "2em" }}
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
