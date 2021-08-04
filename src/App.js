import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import CalPage from './pages/calPage/CalPage';


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        < Route path="/" exact component={Home} />
          <Route path="/calculator" exact component={CalPage} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
