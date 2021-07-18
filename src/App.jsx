//HOC
import DefaultHOC from "./HOC/Default.HOC";

//pages
import Homepage from "./Pages/Home.page";
import Movie from "./Pages/Movie.page";

//import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  
  return (
    <>
      <DefaultHOC  path="/" exact component={Homepage}/>
      <DefaultHOC  path="/movies" exact component={Movie}/>
    </>
  );
}

export default App;
