import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import store from "./sotre";
import { Provider, useDispatch, useSelector } from "react-redux";
import { addlist } from "./slices/f";
const Add = (props) => {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <p className="one">Add New Friend</p>
      <p>Robot Name*</p>

      <input
        type="text"
        onChange={(e) => {
          setinput(e.target.value);
        }}
      />
      <p>rebut image</p>
      <div className="img">
        {input ? <img src={`https://robohash.org/${input}`} alt="" /> : ""}
      </div>
      <br />
      <button
        onClick={() => {
          if (!input) return;

          // const t  = props.list.find((e) => e.name === input);
          let t = false;
          if (!t) {
            dispatch(
              addlist({
                name: input,
                img: "https://robohash.org/" + input,
              })
            );
          } else {
            // setTimeout(() => {},2000)
            toast.error("il exist cette robot!", {
              duration: 2000,
            });
          }
        }}
      >
        Add Robot
      </button>
    </>
  );
};
const List = () => {
  const [filter, setfilter] = useState("");
  const store = useSelector((state) => state.listState);

  const props = {
    list: store.list,
  };

  return (
    <>
      <p className="one">List of Robot Friends</p>
      <input
        type="text"
        className="cherche"
        placeholder="Search"
        onChange={(e) => {
          setfilter(e.target.value);
        }}
      />
      <div className="grid">
        {props.list.map((e) => {
          if (
            !e.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          ) {
            return;
          }
          return (
            <>
              <div>
                <p>{e.name}</p>
                <img src={`https://robohash.org/${e.name}`} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

function App() {
  const [list, setlist] = useState([]);
  return (
    <>
      <Provider store={store}>
        <header>
          <Add />
          <List />
        </header>
        <Toaster />
      </Provider>
    </>
  );
}

export default App;
