import "./App.css";
import Data from "./Data";
import { BrowserRouter as Router,Routes, Route,  } from "react-router-dom";
import Form from "./Form";
import Form2 from "./Form2";
import Form3 from "./Form3";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Form/>}></Route>
        <Route exact path="/contact" element={<Form2/>}></Route>
        <Route exact path="/signup" element={<Form3/>}></Route>
        <Route exact path="/data" element={<Data/>}></Route> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
