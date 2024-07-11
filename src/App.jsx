import "./App.css";
import "./theme.css";
import { useReducer } from "react";

const initialData = {
  name: "malek",
  age: 28,
  startCount: 0,
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_AGE":
      return { ...state, age: action.newValue };
      case "CHANGE_ACOUNT":
      return { ...state, startCount: action.newValue };
      case "CHANGE_ACOUNT":
        return { ...state, startCount: action.newValue };
        case "CHANGE_theme":
        return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

function App() {
  const [allData, dispatch] = useReducer(reducer, initialData);

  return (
    <div className={`App ${allData.theme}`}>
      <button style={{ marginBottom: "44px" }}
      onClick={() => {dispatch({type:"CHANGE_theme",newValue:allData.theme ==="light"?"dark":"light"})
        
      }
      }>Toggle Theme</button>

      <div onChange={() => {
          dispatch({ type: "CHANGE_theme", newValue: allData.theme === "light" ?"dark":"light" });
        }}
      style={{ marginBottom: "44px" }} className="btn-container">
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      <div>
        <button style={{ marginRight: "26px" }}>Light</button>
        <button onClick={() => {
          dispatch({ type: "CHANGE_theme", newValue: "dark" });
        }}
        style={{ marginRight: "26px" }}>Dark</button>
        <button style={{ marginRight: "26px" }} 
        onClick={() => {
          dispatch({ type: "CHANGE_theme", newValue: "grey" });
        }}>Grey</button>
        <button onClick={() => {
          dispatch({ type: "CHANGE_theme", newValue: "pink" });
        }}>Pink</button>
      </div>

      <h2 style={{ marginTop: "66px" }}>My name is {allData.name}</h2>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_NAME", newValue: "king" });
        }}
      >
        Change name
      </button>
      <br />
      <br />

      <h2>My Age is {allData.age}</h2>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_AGE", newValue: 33 });
        }}
      >
        Change Age
      </button>

      <br />
      <br />
      <br />
      <br />
      <button  onClick={() => {
          dispatch({ type: "CHANGE_ACOUNT", newValue:(allData.startCount+1 )});
        }}>count is {allData.startCount}</button>
    </div>
  );
}

export default App;
