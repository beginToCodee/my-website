import React,{useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import {Switch,Route, Redirect} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Service from './components/Services';
import Project from './components/Project';






function App() {
  useEffect(()=>{
    console.log(window.location.pathname)
  },[]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/my-website" />
        </Route>
        <Route exact path='/my-website' component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/skill" component={Skill} />
        <Route path="/service" component={Service} />
        <Route path="/project" component={Project} />
        
      </Switch>
     </div>
  );
}

export default App;
