import { useState, createContext, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

const Add = () => {
  const [input, setinput] = useState("");
  const props = useContext(Valeurr);
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

          const t = props.list.find((e) => e.name === input);

          if (!t) {
            props.setlist([
              ...props.list,
              {
                name: input,
                img: "https://robohash.org/" + input,
              },
            ]);
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
  const  props  = useContext(Valeurr);

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

const Valeurr = createContext({
  list: [],
  setlist: function (list) {},
});
function App() {
  const [list, setlist] = useState([]);
  return (
    <>
      <Valeurr.Provider
        value={{
          list: list,
          setlist: setlist,
        }}
      >
        <header>
          <Add />
          <List />
        </header>
        <Toaster />
      </Valeurr.Provider>
    </>
  );
}

export default App;
