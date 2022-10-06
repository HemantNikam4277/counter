import React, {useState} from "react";

function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const deccrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <div className="bg-dark">
        <div className="container  py-5">
          <p className="text-center py-4 fw-bold fs-2 text-white">This is counter App</p>
          <div className="text-center border py-3">
            <div className="fw-bold p-3 text-white">The count is : {count}</div>
            <button className="btn btn-light me-2 btn-sm text-dark" onClick={increment}> Plus + </button>
            <button className="btn btn-light btn-sm text-dark" onClick={deccrement}> Minus - </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
