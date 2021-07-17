

import DefaultHOC from "./HOC/Default.HOC";
import Homepage from "./Pages/Home.page";


//import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  
  return (
    <>
      <DefaultHOC  path="/" exact component={Homepage}/>
    </>
  );
}

export default App;
