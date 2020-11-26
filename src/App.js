import NavBar from './components/navBar'
import Home from './components/pages'
import About from './components/pages/about';
import Team from './components/pages/team';
import Booking from './components/pages/booking';
import Menu from './components/pages/menu';
import './App.css'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/team" exact component={Team}/>
          <Route path="/booking" exact component={Booking}/>
          <Route path="/menu" exact component={Menu}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
