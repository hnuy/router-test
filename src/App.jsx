import './App.css';
import { Home, Contact, About} from './pages'
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <button><Link to="/">Home</Link></button>
          <br/>
          <button><Link to="/about">About</Link></button>
          <br/>
          <button><Link to="/contact">Contact</Link></button>
        </div>
        <div>
          <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
