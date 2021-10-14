import "./App.css"
import { Home, Contact, About, Profile } from "./pages"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import { PrimaryButton } from "@fluentui/react/lib/Button"
import Navbar from "./component/Navbar"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
