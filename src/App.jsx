

import DefaultHOC from "./HOC/Default.HOC";
import Counter from "./components/Counter";

function App() {
  
  return (
    <>
      <DefaultHOC  path="/" exact component={Counter}/>
    </>
  );
}

export default App;
