// import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
// import { ShopCard } from "./components/ShopCard";

function App() {
  // const [state, setState] = useState(false);
  return (
    <div className="w-full justify-center">
      {/* <button
        onClick={() => {
          setState((s) => !s);
        }}
      >
        {state ? 'Close Form' : 'Open Form'}
      </button> */}
      {/* <ShopCard />
      <ShopCard /> */}
      <Form />
      {/* {state && <Form />} */}
    </div>
  );
}

export default App;
