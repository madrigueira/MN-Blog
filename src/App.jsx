import "./index.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/post" Component={Post}></Route>
      </Routes>
    </Router>
  );
}

export default App;
